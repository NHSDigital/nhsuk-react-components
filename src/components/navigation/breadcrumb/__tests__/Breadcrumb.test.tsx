import React, { ElementType } from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from '../';

describe('Breadcrumb', () => {
  it('base element matches snapshot', () => {
    const { container } = render(<Breadcrumb />);

    expect(container).toMatchSnapshot('BaseBreadcrumbs');
  });

  it('renders with children', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(container).toMatchSnapshot('BreadcrumbWithChildren');
  });

  it('places children in correct places', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
        <Breadcrumb.Back href="/back">Breadcrumb 2</Breadcrumb.Back>
        <p id="otherElement">Test Element</p>
      </Breadcrumb>,
    );

    const breadcrumbListItems = container.querySelectorAll('.nhsuk-breadcrumb__list > li');

    expect(breadcrumbListItems.length).toBe(2);

    breadcrumbListItems.forEach((child) => {
      expect(child.classList).toContain('nhsuk-breadcrumb__list-item');
    });

    expect(container.querySelector('#otherElement')?.textContent).toEqual('Test Element');
    expect(container.querySelector('.nhsuk-back-link')?.textContent).toBe('Back to Breadcrumb 2');
  });

  it('passes through other children fine', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
        <p id="otherElement">Test Element</p>
      </Breadcrumb>,
    );

    expect(container.querySelector('#otherElement')?.textContent).toEqual('Test Element');
  });

  it.each<string | undefined>([undefined, 'Test label'])(
    'Renders as expected when aria label is specified as %s',
    (ariaLabel) => {
      const { container } = render(<Breadcrumb aria-label={ariaLabel}></Breadcrumb>);

      const breadcrumbElement = container.querySelector('.nhsuk-breadcrumb');

      expect(breadcrumbElement?.getAttribute('aria-label')).toBe(ariaLabel ?? 'Breadcrumb');
    },
  );

  describe('The BreadcrumbBack component', () => {
    it('Renders as expected with visually hidden text', () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Back href="/back">Breadcrumb 2</Breadcrumb.Back>
        </Breadcrumb>,
      );

      const hiddenSpan = container.querySelector('.nhsuk-back-link > .nhsuk-u-visually-hidden');

      expect(hiddenSpan?.textContent).toBe('Back to ');
    });

    it.each<ElementType | undefined>([undefined, 'button'])(
      'Renders with asElement when specified as %s',
      (asElement) => {
        const { container } = render(
          <Breadcrumb>
            <Breadcrumb.Back href="/back" asElement={asElement}>
              Breadcrumb 2
            </Breadcrumb.Back>
          </Breadcrumb>,
        );

        const component = container.querySelector('.nhsuk-back-link');

        expect(component?.nodeName).toBe(asElement?.toString()?.toUpperCase() ?? 'A');
      },
    );
  });
});
