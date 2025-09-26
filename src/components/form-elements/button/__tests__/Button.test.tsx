import React, { ComponentProps, Ref, createRef, forwardRef } from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button>Submit</Button>);

    expect(container).toMatchSnapshot('PlainButton');
  });

  it('forwards refs', () => {
    const ref1 = createRef<HTMLButtonElement>();
    const ref2 = createRef<HTMLAnchorElement>();

    const { container } = render(
      <>
        <Button ref={ref1}>Submit</Button>
        <Button ref={ref2} href="/">
          Cancel
        </Button>
      </>,
    );

    const buttonEl1 = container.querySelector('button');
    const buttonEl2 = container.querySelector('a');

    expect(ref1.current).toBe(buttonEl1);
    expect(ref1.current).toHaveClass('nhsuk-button');

    expect(ref2.current).toBe(buttonEl2);
    expect(ref2.current).toHaveClass('nhsuk-button');
  });

  it('renders child text as expected', () => {
    const { container } = render(<Button>Submit</Button>);

    expect(container.querySelector('button')?.textContent).toEqual('Submit');
  });

  it('renders as custom element', () => {
    function CustomLink(
      { children, href, ...rest }: ComponentProps<'a'>,
      ref: Ref<HTMLAnchorElement>,
    ) {
      return (
        <a href={href} ref={ref} {...rest} data-custom-link="true">
          {children}
        </a>
      );
    }

    function CustomButton(props: ComponentProps<'button'>, ref: Ref<HTMLButtonElement>) {
      return <button ref={ref} {...props} data-custom-button="true" />;
    }

    const { container } = render(
      <>
        <Button asElement={forwardRef(CustomButton)}>Submit</Button>
        <Button asElement={forwardRef(CustomLink)} href="/">
          Cancel
        </Button>
      </>,
    );

    const buttonEl1 = container.querySelector('button');
    const buttonEl2 = container.querySelector('a');

    expect(buttonEl1).toHaveTextContent('Submit');
    expect(buttonEl1?.dataset).toHaveProperty('customButton', 'true');

    expect(buttonEl2).toHaveTextContent('Cancel');
    expect(buttonEl2?.dataset).toHaveProperty('customLink', 'true');
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
