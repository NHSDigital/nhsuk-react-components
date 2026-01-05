import { createRef } from 'react';

import { PasswordInput } from '..';

import { renderClient, renderServer } from '#util/components';
import { type InputWidth } from '#util/types';

describe('PasswordInput', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <PasswordInput label="Password" labelProps={{ size: 'l' }} id="password" />,
      { moduleName: 'nhsuk-password-input' },
    );

    expect(container).toMatchSnapshot('PasswordInput');
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <PasswordInput label="Password" labelProps={{ size: 'l' }} id="password" />,
      { moduleName: 'nhsuk-password-input' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-password-input',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLInputElement>();
    const buttonRef = createRef<HTMLButtonElement>();

    const { container } = await renderClient(
      <PasswordInput
        formGroupProps={{ ref: groupRef }}
        buttonProps={{ ref: buttonRef }}
        ref={fieldRef}
      />,
      { className: 'nhsuk-password-input' },
    );

    const groupEl = container.querySelector('div');
    const inputEl = container.querySelector('input');
    const buttonEl = container.querySelector('button');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(fieldRef.current).toBe(inputEl);
    expect(fieldRef.current).toHaveClass('nhsuk-input');

    expect(buttonRef.current).toBe(buttonEl);
    expect(buttonRef.current).toHaveClass('nhsuk-password-input__toggle');
  });

  it('should handle DOM events where ref exists', async () => {
    const ref = createRef<HTMLInputElement>();
    const mock = jest.fn();

    const handleClick = () => {
      if (!ref.current) return;
      mock();
    };

    const { modules } = await renderClient(<PasswordInput onClick={handleClick} ref={ref} />, {
      className: 'nhsuk-input',
    });

    const [inputEl] = modules;
    inputEl.click();

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it.each<InputWidth | undefined>([undefined, '5', '10'])(
    'sets the provided input width if specified with %s',
    async (width) => {
      const { modules } = await renderClient(<PasswordInput width={width} />, {
        className: 'nhsuk-input',
      });

      const [inputEl] = modules;

      if (width) {
        expect(inputEl).toHaveClass(`nhsuk-input--width-${width}`);
      } else {
        expect(inputEl.className.indexOf('nhsuk-input--width')).toBe(-1);
      }
    },
  );

  it('sets the error class when error message is provided', async () => {
    const { modules } = await renderClient(
      <>
        <PasswordInput error={undefined} />
        <PasswordInput error="Enter password" />
      </>,
      { className: 'nhsuk-input' },
    );

    const [inputEl1, inputEl2] = modules;

    expect(inputEl1).not.toHaveClass('nhsuk-input--error');
    expect(inputEl2).toHaveClass('nhsuk-input--error');
  });

  it('sets the provided input width if specified', async () => {
    const { modules } = await renderClient(<PasswordInput width="5" />, {
      className: 'nhsuk-input',
    });

    const [inputEl] = modules;

    expect(inputEl).toHaveClass('nhsuk-input--width-5');
  });
});
