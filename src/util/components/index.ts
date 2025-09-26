import { type JSX } from 'react';
import { ServerOptions, renderToString } from 'react-dom/server';
import { RenderOptions as ClientOptions, act, render } from '@testing-library/react';

type RenderOptions =
  | { moduleName?: never; className: string }
  | { moduleName: string; className?: never };

/**
 * Render using server-side rendering
 */
export async function renderServer(element: JSX.Element, options: RenderOptions & ServerOptions) {
  const { moduleName, className, ...serverOptions } = options;
  const selector = moduleName ? `[data-module="${moduleName}"]` : `.${className}`;

  // Prepare container
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Render using React DOM
  container.innerHTML = renderToString(element, serverOptions);

  // Find rendered modules
  const modules = [...container.querySelectorAll<HTMLElement>(selector)];
  expect(modules.length).toBeGreaterThan(0);

  return { container, element, modules };
}

/**
 * Render using client-side rendering
 */
export async function renderClient(element: JSX.Element, options: RenderOptions & ClientOptions) {
  const { moduleName, className, ...renderOptions } = options;
  const selector = moduleName ? `[data-module="${moduleName}"]` : `.${className}`;

  // Render using React testing library
  const { container } = await act(() => render(element, renderOptions));

  // Find rendered modules
  const modules = [...container.querySelectorAll<HTMLElement>(selector)];
  expect(modules.length).toBeGreaterThan(0);

  // Verify module initialisation
  if (moduleName) {
    for (const $root of modules) {
      expect($root).toHaveAttribute(`data-${moduleName}-init`);
    }
  }

  return { container, element, modules };
}
