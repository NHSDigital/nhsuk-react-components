import React, { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateInput, { DateInputChangeEvent } from '../DateInput';

describe('DateInput', () => {
  it('matches snapshot', () => {
    const { container } = render(<DateInput id="testInput" name="testInput" />);

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const groupRef = createRef<HTMLDivElement>();
    const moduleRef = createRef<HTMLDivElement>();
    const fieldRefs = [
      createRef<HTMLInputElement>(),
      createRef<HTMLInputElement>(),
      createRef<HTMLInputElement>(),
    ];

    const { container } = render(
      <DateInput formGroupProps={{ ref: groupRef }} ref={moduleRef}>
        <DateInput.Day ref={fieldRefs[0]} />
        <DateInput.Month ref={fieldRefs[1]} />
        <DateInput.Year ref={fieldRefs[2]} />
      </DateInput>,
    );

    const groupEl = container.querySelectorAll('div')[0];
    const moduleEl = container.querySelectorAll('div')[1];
    const inputEls = container.querySelectorAll('input');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(moduleRef.current).toBe(moduleEl);
    expect(moduleRef.current).toHaveClass('nhsuk-date-input');

    expect(fieldRefs[0].current).toBe(inputEls[0]);
    expect(fieldRefs[0].current).toHaveClass('nhsuk-date-input__input');

    expect(fieldRefs[1].current).toBe(inputEls[1]);
    expect(fieldRefs[1].current).toHaveClass('nhsuk-date-input__input');

    expect(fieldRefs[2].current).toBe(inputEls[2]);
    expect(fieldRefs[2].current).toHaveClass('nhsuk-date-input__input');
  });

  it('invokes the provided onChange function prop if provided', () => {
    let onChangeParam: DateInputChangeEvent | undefined;
    const onChange = jest.fn().mockImplementation((val) => (onChangeParam = val));

    const { container } = render(<DateInput id="testInput" name="testInput" onChange={onChange} />);

    const dayInput = container.querySelector('#testInput-day')!;
    const monthInput = container.querySelector('#testInput-month')!;
    const yearInput = container.querySelector('#testInput-year')!;

    fireEvent.change(dayInput, { target: { value: '21' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChangeParam?.currentTarget.value).toEqual({
      day: '21',
      month: '',
      year: '',
    });

    fireEvent.change(monthInput, { target: { value: '03' } });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChangeParam?.currentTarget.value).toEqual({
      day: '21',
      month: '03',
      year: '',
    });

    fireEvent.change(yearInput, { target: { value: '2024' } });

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChangeParam?.currentTarget.value).toEqual({
      day: '21',
      month: '03',
      year: '2024',
    });
  });

  it('renders the specified children instead of date fields if provided', () => {
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
