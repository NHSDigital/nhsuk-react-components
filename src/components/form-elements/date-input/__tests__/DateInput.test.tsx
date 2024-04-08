import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateInput, { DateInputChangeEvent } from '../DateInput';

describe('DateInput', () => {
  it('matches snapshot', () => {
    const { container } = render(<DateInput id="testInput" name="testInput" />);

    expect(container).toMatchSnapshot();
  });

  it.each`
    autoSelectNext | inputValue | monthFocusExpected
    ${false}       | ${'1'}     | ${false}
    ${false}       | ${'11'}    | ${false}
    ${true}        | ${'1'}     | ${false}
    ${true}        | ${'11'}    | ${true}
  `(
    'When autoSelectNext is $autoSelectNext, the day input value is $inputValue, then month focus is expected to be $monthFocusExpected',
    ({ autoSelectNext, inputValue, monthFocusExpected }) => {
      const { container } = render(
        <DateInput id="testInput" name="testInput" autoSelectNext={autoSelectNext} />,
      );

      const dayInput = container.querySelector('#testInput-day')!;
      const monthInput = container.querySelector('#testInput-month')!;

      expect(monthInput).not.toHaveFocus();

      fireEvent.change(dayInput, { target: { value: inputValue } });

      if (monthFocusExpected) {
        expect(monthInput).toHaveFocus();
      } else {
        expect(monthInput).not.toHaveFocus();
      }
    },
  );

  it.each`
    autoSelectNext | inputValue | yearFocusExpected
    ${false}       | ${'1'}     | ${false}
    ${false}       | ${'11'}    | ${false}
    ${true}        | ${'1'}     | ${false}
    ${true}        | ${'11'}    | ${true}
  `(
    'When autoSelectNext is $autoSelectNext, the day input value is $inputValue, then year focus is expected to be $yearFocusExpected',
    ({ autoSelectNext, inputValue, yearFocusExpected }) => {
      const { container } = render(
        <DateInput id="testInput" name="testInput" autoSelectNext={autoSelectNext} />,
      );

      const monthInput = container.querySelector('#testInput-month')!;
      const yearInput = container.querySelector('#testInput-year')!;

      expect(yearInput).not.toHaveFocus();

      fireEvent.change(monthInput, { target: { value: inputValue } });

      if (yearFocusExpected) {
        expect(yearInput).toHaveFocus();
      } else {
        expect(yearInput).not.toHaveFocus();
      }
    },
  );

  it('Invokes the provided onChange function prop if provided', () => {
    let onChangeParam: DateInputChangeEvent | null = null;
    const onChange = jest.fn().mockImplementation((val) => (onChangeParam = val));

    const { container } = render(<DateInput id="testInput" name="testInput" onChange={onChange} />);

    const dayInput = container.querySelector('#testInput-day')!;
    const monthInput = container.querySelector('#testInput-month')!;
    const yearInput = container.querySelector('#testInput-year')!;

    fireEvent.change(dayInput, { target: { value: '21' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChangeParam!.currentTarget!.value).toEqual({
      day: '21',
      month: '',
      year: '',
    });

    fireEvent.change(monthInput, { target: { value: '03' } });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChangeParam!.currentTarget!.value).toEqual({
      day: '21',
      month: '03',
      year: '',
    });

    fireEvent.change(yearInput, { target: { value: '2024' } });

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChangeParam!.currentTarget!.value).toEqual({
      day: '21',
      month: '03',
      year: '2024',
    });
  });

  it('Renders the specified children instead of date fields if provided', () => {
    const { container } = render(
      <DateInput id="testInput" name="testInput">
        <div id="testDiv"></div>
      </DateInput>,
    );

    expect(container.querySelector('#testInput-day')).toBeNull();
    expect(container.querySelector('#testInput-month')).toBeNull();
    expect(container.querySelector('#testInput-year')).toBeNull();

    expect(container.querySelector('#testDiv')).not.toBeNull();
  });
});
