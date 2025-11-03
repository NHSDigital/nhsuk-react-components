import { render } from '@testing-library/react';
import { createRef } from 'react';

import { TextInput } from '..';

import { renderClient, renderServer } from '#util/components';
import { type InputWidth } from '#util/types';

describe('TextInput', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <TextInput label="What is your NHS number?" labelProps={{ size: 'l' }} id="nhs-number" />,
      { className: 'nhsuk-input' },
    );

    expect(container).toMatchSnapshot('TextInput');
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <TextInput label="What is your NHS number?" labelProps={{ size: 'l' }} id="nhs-number" />,
      { className: 'nhsuk-input' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-input',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLInputElement>();

    const { container } = render(<TextInput formGroupProps={{ ref: groupRef }} ref={fieldRef} />);

    const groupEl = container.querySelector('div');
    const inputEl = container.querySelector('input');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(fieldRef.current).toBe(inputEl);
    expect(fieldRef.current).toHaveClass('nhsuk-input');
  });

  it('should handle DOM events where ref exists', async () => {
    const ref = createRef<HTMLInputElement>();
    const mock = jest.fn();

    const handleClick = () => {
      if (!ref.current) return;
      mock();
    };

    const { modules } = await renderClient(<TextInput onClick={handleClick} ref={ref} />, {
      className: 'nhsuk-input',
    });

    const [textInputEl] = modules;
    textInputEl.click();

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it.each<InputWidth | undefined>([undefined, '5', '10'])(
    'Sets the provided input width if specified with %s',
    (width) => {
      const { container } = render(<TextInput width={width} />);

      const input = container.querySelector('.nhsuk-input');

      if (width) {
        expect(input).toHaveClass(`nhsuk-input--width-${width}`);
      } else {
        expect(input?.className.indexOf('nhsuk-input--width')).toBe(-1);
      }
    },
  );

  it('Sets the error class when error message is provided', async () => {
    const { modules } = await renderClient(
      <>
        <TextInput error={undefined} />
        <TextInput error="Enter NHS number" />
      </>,
      { className: 'nhsuk-input' },
    );

    const [inputEl1, inputEl2] = modules;

    expect(inputEl1).not.toHaveClass('nhsuk-input--error');
    expect(inputEl2).toHaveClass('nhsuk-input--error');
  });

  it('Sets the provided input width if specified', () => {
    const { container } = render(<TextInput width="5" />);

    expect(container.querySelector('.nhsuk-input')).toHaveClass('nhsuk-input--width-5');
  });

  it.each`
    prefix       | suffix
    ${'£'}       | ${'per item'}
    ${'£'}       | ${undefined}
    ${undefined} | ${'per item'}
    ${undefined} | ${undefined}
  `(
    'Renders expected prefix and suffix when provided $prefix and $suffix',
    ({ prefix, suffix }) => {
      const { container } = render(<TextInput prefix={prefix} suffix={suffix} />);

      const prefixElement = container.querySelector('.nhsuk-input__wrapper > .nhsuk-input__prefix');
      const suffixElement = container.querySelector('.nhsuk-input__wrapper > .nhsuk-input__suffix');

      if (prefix) {
        expect(prefixElement).not.toBeNull();
        expect(prefixElement?.textContent).toBe(prefix);
      } else {
        expect(prefixElement).toBeNull();
      }

      if (suffix) {
        expect(suffixElement).not.toBeNull();
        expect(suffixElement?.textContent).toBe(suffix);
      } else {
        expect(suffixElement).toBeNull();
      }

      if (!prefix && !suffix) {
        expect(container.querySelector('.nhsuk-input__wrapper')).toBeNull();
        expect(container.querySelector('.nhsuk-input')).not.toBeNull();
      } else {
        expect(container.querySelector('.nhsuk-input__wrapper > .nhsuk-input')).not.toBeNull();
      }
    },
  );
});
