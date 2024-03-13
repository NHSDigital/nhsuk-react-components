import React from 'react';
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
      expect(child.classList).toContain('nhsuk-breadcrumb__item');
    });

    expect(container.querySelector('#otherElement')?.textContent).toEqual('Test Element');
    expect(container.querySelector('.nhsuk-breadcrumb__back')?.textContent).toBe(
      'Back to &nbsp;Breadcrumb 2',
    );
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
});
