import React from 'react';
import { shallow, mount } from 'enzyme';
import Breadcrumb from '..';

describe('Breadcrumb', () => {
  it('base element matches snapshot', () => {
    const component = shallow(<Breadcrumb></Breadcrumb>);
    expect(component).toMatchSnapshot('BaseBreadcrumbs');
    component.unmount();
  });

  it('renders with children', () => {
    const component = mount(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(component).toMatchSnapshot('BreadcrumbWithChildren');
    component.unmount();
  });

  it('places children in correct places', () => {
    const component = mount(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
        <Breadcrumb.Back href="/back">Back</Breadcrumb.Back>
        <p id="otherElement">Test Element</p>
      </Breadcrumb>,
    );
    const breadcrumbList = component
      .find('.nhsuk-breadcrumb__list')
      .render()
      .children();

    expect(breadcrumbList.length).toBe(2);
    breadcrumbList.toArray().forEach(child => {
      expect(child.attribs.class).toBe('nhsuk-breadcrumb__item');
    });

    expect(component.find('#otherElement').text()).toEqual('Test Element');
    expect(component.find('.nhsuk-breadcrumb__back').text()).toBe('Back');
  });

  it('passes through other children fine', () => {
    const component = mount(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
        <p id="otherElement">Test Element</p>
      </Breadcrumb>,
    );
    expect(component.find('#otherElement').text()).toEqual('Test Element');
    component.unmount();
  });
});
