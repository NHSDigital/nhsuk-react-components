import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button>Submit</Button>);

    expect(container).toMatchSnapshot('PlainButton');
  });

  it('renders child text as expected', () => {
    const { container } = render(<Button>Submit</Button>);

    expect(container.querySelector('button')?.textContent).toEqual('Submit');
  });

  describe('disabled', () => {
    it('matches snapshot', () => {
      const { container } = render(<Button disabled>Submit</Button>);

      expect(container).toMatchSnapshot('DisabledButton');
    });

    it('adds correct classes for button type', () => {
      const { container } = render(<Button disabled>Submit</Button>);

      expect(container.querySelector('.nhsuk-button[disabled]')).toBeTruthy();
    });
  });

  describe('secondary', () => {
    it('matches snapshot', () => {
      const { container } = render(<Button secondary>Submit</Button>);

      expect(container).toMatchSnapshot('SecondaryButton');
    });

    it('adds correct classes for button type', () => {
      const { container } = render(<Button secondary>Submit</Button>);

      expect(container.querySelector('.nhsuk-button--secondary')).toBeTruthy();
    });
  });

  describe('reverse', () => {
    it('matches snapshot', () => {
      const { container } = render(<Button reverse>Submit</Button>);

      expect(container).toMatchSnapshot('ReverseButton');
    });

    it('adds correct classes for button type', () => {
      const { container } = render(<Button reverse>Submit</Button>);

      expect(container.querySelector('.nhsuk-button--reverse')).toBeTruthy();
    });
  });

  it('adds aria props and disabled to disabled button', () => {
    const { container } = render(<Button disabled>Submit</Button>);

    expect(container.querySelector('button.nhsuk-button[disabled]')?.getAttribute('type')).toBe(
      'submit',
    );
    expect(
      container.querySelector('button.nhsuk-button[disabled]')?.getAttribute('aria-disabled'),
    ).toBe('true');
    expect(container.querySelector('button.nhsuk-button[disabled]')).toBeDisabled();
  });

  it('preventDoubleClick calls debounced function', () => {
    jest.useFakeTimers();
    const clickHandler = jest.fn();

    const { container } = render(
      <Button preventDoubleClick onClick={clickHandler}>
        Submit
      </Button>,
    );

    const button = container.querySelector('button');

    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    jest.runAllTimers();
    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(2);
  });

  it('preventDoubleClick=false calls original function', () => {
    const clickHandler = jest.fn();

    const { container } = render(
      <Button preventDoubleClick={false} onClick={clickHandler}>
        Submit
      </Button>,
    );

    const button = container.querySelector('button');
    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(2);

    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(3);
  });

  it('uses custom debounce timeout', () => {
    jest.useFakeTimers();

    const clickHandler = jest.fn();

    const { container } = render(
      <Button preventDoubleClick debounceTimeout={5000} onClick={clickHandler}>
        Submit
      </Button>,
    );

    const button = container.querySelector('button');
    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(4999);
    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1);
    button?.click();
    expect(clickHandler).toHaveBeenCalledTimes(2);
  });
});

describe('Button as a link', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button href="/">Submit</Button>);

    expect(container).toMatchSnapshot('PlainButton');
  });

  it('renders child text as expected', () => {
    const { container } = render(<Button href="/">Submit</Button>);

    expect(container.querySelector('a')?.textContent).toEqual('Submit');
  });

  describe('button types', () => {
    describe('disabled', () => {
      it('matches snapshot', () => {
        const { container } = render(
          <Button href="/" disabled>
            Submit
          </Button>,
        );

        expect(container).toMatchSnapshot('DisabledButton');
      });

      it('adds correct classes for type - disabled', () => {
        const { container } = render(
          <Button href="/" disabled>
            Submit
          </Button>,
        );

        expect(container.querySelector('.nhsuk-button--disabled')).toBeTruthy();
      });
    });

    describe('secondary', () => {
      it('matches snapshot', () => {
        const { container } = render(
          <Button href="/" secondary>
            Submit
          </Button>,
        );

        expect(container).toMatchSnapshot('SecondaryButton');
      });

      it('adds correct classes for type - secondary', () => {
        const { container } = render(
          <Button href="/" secondary>
            Submit
          </Button>,
        );

        expect(container.querySelector('.nhsuk-button--secondary')).toBeTruthy();
      });
    });

    describe('reverse', () => {
      it('matches snapshot', () => {
        const { container } = render(
          <Button href="/" reverse>
            Submit
          </Button>,
        );

        expect(container).toMatchSnapshot('ReverseButton');
      });

      it('adds correct classes for type - reverse', () => {
        const { container } = render(
          <Button href="/" reverse>
            Submit
          </Button>,
        );

        expect(container.querySelector('.nhsuk-button--reverse')).toBeTruthy();
      });
    });
  });

  it('adds aria disabled props to disabled button', () => {
    const { container } = render(
      <Button href="/" disabled>
        Submit
      </Button>,
    );

    expect(
      container.querySelector('a.nhsuk-button.nhsuk-button--disabled')?.getAttribute('role'),
    ).toBe('button');
    expect(
      container
        .querySelector('a.nhsuk-button.nhsuk-button--disabled')
        ?.getAttribute('aria-disabled'),
    ).toBe('true');
  });
});

describe('Button as a button', () => {
  it('renders a button when not given a href', () => {
    const { container } = render(<Button>Submit</Button>);

    expect(container.querySelector('button.nhsuk-button')?.textContent).toBe('Submit');
  });

  it('renders an anchor when given a href', () => {
    const { container } = render(<Button href="/">Submit</Button>);

    expect(container.querySelector('a.nhsuk-button')?.textContent).toBe('Submit');
  });
});
