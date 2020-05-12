import React from 'react';
import { mount } from 'enzyme';
import DateInput from '../DateInput';

describe('DateInput', () => {
  it('matches snapshot', () => {
    const component = mount(<DateInput name="testInput" />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('wraps onChange handlers', () => {
    const onChange = jest.fn();
    const component = mount(<DateInput name="testInput" onChange={onChange} />);
    // Day
    component
      .find('div.nhsuk-date-input')
      .simulate('change', { target: { name: 'testInput-day', value: '27' } });
    expect(component.state('value')).toEqual({
      day: '27',
      month: '',
      year: '',
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toEqual({
      day: '27',
      month: '',
      year: '',
    });

    // Month
    component
      .find('div.nhsuk-date-input')
      .simulate('change', { target: { name: 'testInput-month', value: '06' } });
    expect(component.state('value')).toEqual({
      day: '27',
      month: '06',
      year: '',
    });
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[0][0].target.value).toEqual({
      day: '27',
      month: '06',
      year: '',
    });

    // Year
    component
      .find('div.nhsuk-date-input')
      .simulate('change', { target: { name: 'testInput-year', value: '2000' } });
    expect(component.state('value')).toEqual({
      day: '27',
      month: '06',
      year: '2000',
    });
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[0][0].target.value).toEqual({
      day: '27',
      month: '06',
      year: '2000',
    });

    component.unmount();
  });
});
