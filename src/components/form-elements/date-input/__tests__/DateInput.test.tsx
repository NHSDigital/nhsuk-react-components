import React, { createRef } from 'react';
import { fireEvent } from '@testing-library/react';
import DateInput, { DateInputChangeEvent } from '../DateInput';
import { renderClient, renderServer } from '@util/components';

describe('DateInput', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <DateInput
        hint="For example, 15 3 1984"
        legend="What is your date of birth?"
        legendProps={{ size: 'l' }}
        id="date-input"
      />,
      { className: 'nhsuk-date-input' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with custom date fields', async () => {
    const { container } = await renderClient(
      <DateInput
        hint="For example, 15 3 1984"
        legend="What is your date of birth?"
        legendProps={{ size: 'l' }}
        id="date-input"
      >
        <DateInput.Day defaultValue="31" />
        <DateInput.Month defaultValue="3" />
        <DateInput.Year defaultValue="1984" />
      </DateInput>,
      { className: 'nhsuk-date-input' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <DateInput
        hint="For example, 15 3 1984"
        legend="What is your date of birth?"
        legendProps={{ size: 'l' }}
        id="date-input"
      />,
      { className: 'nhsuk-date-input' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-date-input',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const groupRef = createRef<HTMLDivElement>();
    const moduleRef = createRef<HTMLDivElement>();
    const fieldRefs = [
      createRef<HTMLInputElement>(),
      createRef<HTMLInputElement>(),
      createRef<HTMLInputElement>(),
    ];

    const { container, modules } = await renderClient(
      <DateInput
        hint="For example, 15 3 1984"
        legend="What is your date of birth?"
        legendProps={{ size: 'l' }}
        formGroupProps={{ ref: groupRef }}
        ref={moduleRef}
      >
        <DateInput.Day ref={fieldRefs[0]} />
        <DateInput.Month ref={fieldRefs[1]} />
        <DateInput.Year ref={fieldRefs[2]} />
      </DateInput>,
      { className: 'nhsuk-date-input' },
    );

    const [moduleEl] = modules;

    const groupEl = container.querySelectorAll('div')[0];
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

  it('invokes the provided onChange function prop if provided', async () => {
    const onChange = jest.fn();

    const { modules } = await renderClient(<DateInput onChange={onChange} />, {
      className: 'nhsuk-input',
    });

    const [dayInput, monthInput, yearInput] = modules;

    fireEvent.change(dayInput, { target: { value: '21' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining<Partial<DateInputChangeEvent>>({
        target: expect.objectContaining({
          value: {
            day: '21',
            month: '',
            year: '',
          },
        }),
      }),
    );

    fireEvent.change(monthInput, { target: { value: '3' } });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining<Partial<DateInputChangeEvent>>({
        target: expect.objectContaining({
          value: {
            day: '21',
            month: '3',
            year: '',
          },
        }),
      }),
    );

    fireEvent.change(yearInput, { target: { value: '2024' } });

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining<Partial<DateInputChangeEvent>>({
        target: expect.objectContaining({
          value: {
            day: '21',
            month: '3',
            year: '2024',
          },
        }),
      }),
    );
  });
});
