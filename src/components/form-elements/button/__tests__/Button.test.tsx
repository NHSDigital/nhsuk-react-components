import React from 'react';
import { render } from '@testing-library/react';
import ButtonWrapper, { ButtonLink, Button } from '../Button';

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

      expect(container.querySelector('.nhsuk-button--disabled')).toBeTruthy();
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

    expect(
      container.querySelector('button.nhsuk-button.nhsuk-button--disabled')?.getAttribute('type'),
    ).toBe('submit');
    expect(
      container
        .querySelector('button.nhsuk-button.nhsuk-button--disabled')
        ?.getAttribute('aria-disabled'),
    ).toBe('true');
    expect(container.querySelector('button.nhsuk-button.nhsuk-button--disabled')).toBeDisabled();
  });
});

describe('ButtonLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<ButtonLink href="/">Submit</ButtonLink>);

    expect(container).toMatchSnapshot('PlainButton');
  });

  it('renders child text as expected', () => {
    const { container } = render(<ButtonLink href="/">Submit</ButtonLink>);

    expect(container.querySelector('a')?.textContent).toEqual('Submit');
  });

  describe('button types', () => {
    describe('disabled', () => {
      it('matches snapshot', () => {
        const { container } = render(
          <ButtonLink href="/" disabled>
            Submit
          </ButtonLink>,
        );

        expect(container).toMatchSnapshot('DisabledButton');
      });

      it('adds correct classes for type - disabled', () => {
        const { container } = render(
          <ButtonLink href="/" disabled>
            Submit
          </ButtonLink>,
        );

        expect(container.querySelector('.nhsuk-button--disabled')).toBeTruthy();
      });
    });

    describe('secondary', () => {
      it('matches snapshot', () => {
        const { container } = render(
          <ButtonLink href="/" secondary>
            Submit
          </ButtonLink>,
        );

        expect(container).toMatchSnapshot('SecondaryButton');
      });

      it('adds correct classes for type - secondary', () => {
        const { container } = render(
          <ButtonLink href="/" secondary>
            Submit
          </ButtonLink>,
        );

        expect(container.querySelector('.nhsuk-button--secondary')).toBeTruthy();
      });
    });

    describe('reverse', () => {
      it('matches snapshot', () => {
        const { container } = render(
          <ButtonLink href="/" reverse>
            Submit
          </ButtonLink>,
        );

        expect(container).toMatchSnapshot('ReverseButton');
      });

      it('adds correct classes for type - reverse', () => {
        const { container } = render(
          <ButtonLink href="/" reverse>
            Submit
          </ButtonLink>,
        );

        expect(container.querySelector('.nhsuk-button--reverse')).toBeTruthy();
      });
    });
  });

  it('adds aria disabled props to disabled button', () => {
    const { container } = render(
      <ButtonLink href="/" disabled>
        Submit
      </ButtonLink>,
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

describe('ButtonWrapper', () => {
  it('renders a button when not given a href', () => {
    const { container } = render(<ButtonWrapper>Submit</ButtonWrapper>);

    expect(container.querySelector('button.nhsuk-button')?.textContent).toBe('Submit');
  });

  it('renders an anchor when given a href', () => {
    const { container } = render(<ButtonWrapper href="/">Submit</ButtonWrapper>);

    expect(container.querySelector('a.nhsuk-button')?.textContent).toBe('Submit');
  });
});
