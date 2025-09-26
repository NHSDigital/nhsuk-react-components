import React, { createRef, useRef } from 'react';
import { render } from '@testing-library/react';
import TextInput from '../TextInput';
import { renderClient, renderServer } from '@util/components';
import { InputWidth } from '@util/types/NHSUKTypes';

describe('TextInput', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const TextInputComp = ({ onHandle }: { onHandle: () => void }) => {
    const ref = useRef(null);
    const handleClick = () => {
      if (!ref.current) return;
      onHandle();
    };

    return <TextInput type="button" onClick={handleClick} ref={ref} />;
  };

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

  it('should handle click where ref Exists', () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: document.createElement('button') });
    const mock = jest.fn();
    const { container } = render(<TextInputComp onHandle={mock} />);

    const textInputEl = container.querySelector('input')!;
    textInputEl.click();

    expect(useRefSpy).toBeCalledWith(null);
    expect(mock).toBeCalledTimes(1);
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

  it.each<string | boolean | undefined>([undefined, true, false, 'error'])(
    'Sets the error class if specified with %s',
    (error) => {
      const { container } = render(<TextInput error={error} />);

      const input = container.querySelector('.nhsuk-input');

      if (error) {
        expect(input).toHaveClass('nhsuk-input--error');
      } else {
        expect(input).not.toHaveClass('nhsuk-input--error');
      }
    },
  );

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
