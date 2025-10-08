import { render, type RenderOptions as ClientOptions } from '@testing-library/react';
import { act, type JSX } from 'react';
import { renderToString, type ServerOptions } from 'react-dom/server';

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
  const modules = Array.from(container.querySelectorAll<HTMLElement>(selector));
  if (!modules.length) {
    throw new Error(`renderServer: No modules found: ${selector}`);
  }

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
  const modules = Array.from(container.querySelectorAll<HTMLElement>(selector));
  if (!modules.length) {
    throw new Error(`renderClient: No modules found: ${selector}`);
  }

  // Verify module initialisation
  if (moduleName && !modules.every(($root) => $root.hasAttribute(`data-${moduleName}-init`))) {
    throw new Error(`renderClient: Not all modules are initialised: ${selector}`);
  }

  return { container, element, modules };
}
