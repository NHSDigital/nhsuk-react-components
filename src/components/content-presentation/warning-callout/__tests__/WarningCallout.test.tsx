import React from 'react';
import { mount } from 'enzyme';
import WarningCallout from '../WarningCallout';

describe('WarningCallout', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <WarningCallout>
        <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('adds default visually hidden text', () => {
    const wrapper = mount(
      <WarningCallout>
        <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(wrapper.find(WarningCallout.Label).text()).toBe('Important: School, nursery or work');

    wrapper.unmount();
  });

  it('adds custom visually hidden text', () => {
    const wrapper = mount(
      <WarningCallout>
        <WarningCallout.Label visuallyHiddenText="Not Very Important: ">
          School, nursery or work
        </WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(wrapper.find(WarningCallout.Label).text()).toBe(
      'Not Very Important: School, nursery or work',
    );

    wrapper.unmount();
  });

  it('can disable visually hidden text', () => {
    const wrapper = mount(
      <WarningCallout>
        <WarningCallout.Label visuallyHiddenText={false}>
          School, nursery or work
        </WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(wrapper.find(WarningCallout.Label).text()).toBe('School, nursery or work');

    wrapper.unmount();
  });
});
