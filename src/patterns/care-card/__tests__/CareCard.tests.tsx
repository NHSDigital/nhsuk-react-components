import React from 'react';
import { mount, shallow } from 'enzyme';
import CareCard from '..';

describe('CareCard', () => {
  it('matches snapshot', () => {
    const component = mount(<CareCard type="urgent" />);
    expect(component).toMatchSnapshot('BaseCareCard');
    component.unmount();
  });

  it('generates the correct hidden text', () => {
    const nonUrgentCard = mount(
      <CareCard type="non-urgent">
        <CareCard.Heading>Heading</CareCard.Heading>
      </CareCard>,
    );
    const urgentCard = mount(
      <CareCard type="urgent">
        <CareCard.Heading>Heading</CareCard.Heading>
      </CareCard>,
    );
    const immediateCard = mount(
      <CareCard type="emergency">
        <CareCard.Heading>Heading</CareCard.Heading>
      </CareCard>,
    );

    const withoutHiddenText = mount(
      <CareCard type="emergency">
        <CareCard.Heading visuallyHiddenText={false}>Heading</CareCard.Heading>
      </CareCard>,
    );

    const withCustomHiddentext = mount(
      <CareCard type="emergency">
        <CareCard.Heading visuallyHiddenText="Custom">Heading</CareCard.Heading>
      </CareCard>,
    );

    expect(nonUrgentCard.find('.nhsuk-u-visually-hidden').text()).toEqual('Non-urgent advice: ');
    expect(urgentCard.find('.nhsuk-u-visually-hidden').text()).toEqual('Urgent advice: ');
    expect(immediateCard.find('.nhsuk-u-visually-hidden').text()).toEqual(
      'Immediate action required: ',
    );
    expect(withCustomHiddentext.find('.nhsuk-u-visually-hidden').text()).toEqual('Custom');
    expect(withoutHiddenText.find('.nhsuk-u-visually-hidden').exists()).toBeFalsy();

    nonUrgentCard.unmount();
    urgentCard.unmount();
    immediateCard.unmount();
    withoutHiddenText.unmount();
    withCustomHiddentext.unmount();
  });

  it('renders with correct classNames', () => {
    const nonUrgentCard = shallow(<CareCard type="non-urgent" />);
    const urgentCard = shallow(<CareCard type="urgent" />);
    const immediateCard = shallow(<CareCard type="emergency" />);

    expect(nonUrgentCard.hasClass('nhsuk-card--care--non-urgent')).toBeTruthy();
    expect(urgentCard.hasClass('nhsuk-card--care--urgent')).toBeTruthy();
    expect(immediateCard.hasClass('nhsuk-card--care--emergency')).toBeTruthy();

    nonUrgentCard.unmount();
    urgentCard.unmount();
    immediateCard.unmount();
  });

  it('renders content', () => {
    const component = mount(
      <CareCard type="non-urgent">
        <CareCard.Content>Test Content</CareCard.Content>
      </CareCard>,
    );
    expect(component.find('.nhsuk-card__content').text()).toEqual('Test Content');
    component.unmount();
  });
});