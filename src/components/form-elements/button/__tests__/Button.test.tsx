import { createRef, forwardRef, type ComponentProps, type Ref } from 'react';
import { Button } from '..';
import { renderClient, renderServer } from '#util/components';

describe('Button', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(<Button type="submit">Save and continue</Button>, {
      moduleName: 'nhsuk-button',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Button type="submit">Save and continue</Button>,
      { moduleName: 'nhsuk-button' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-button',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const ref1 = createRef<HTMLButtonElement>();
    const ref2 = createRef<HTMLAnchorElement>();

    const { modules } = await renderClient(
      <>
        <Button ref={ref1} type="submit">
          Save and continue
        </Button>
        <Button ref={ref2} href="/">
          Cancel
        </Button>
      </>,
      { moduleName: 'nhsuk-button' },
    );

    const [buttonEl1, buttonEl2] = modules;

    expect(ref1.current).toBe(buttonEl1);
    expect(ref1.current).toHaveClass('nhsuk-button');

    expect(ref2.current).toBe(buttonEl2);
    expect(ref2.current).toHaveClass('nhsuk-button');
  });

  it('renders child text as expected', async () => {
    const { modules } = await renderClient(<Button type="submit">Save and continue</Button>, {
      moduleName: 'nhsuk-button',
    });

    const [buttonEl] = modules;
    expect(buttonEl).toHaveTextContent('Save and continue');
  });

  it('renders as custom element', async () => {
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

    const { modules } = await renderClient(
      <>
        <Button asElement={forwardRef(CustomButton)}>Save and continue</Button>
        <Button asElement={forwardRef(CustomLink)} href="/">
          Cancel
        </Button>
      </>,
      { moduleName: 'nhsuk-button' },
    );

    const [buttonEl1, buttonEl2] = modules;

    expect(buttonEl1).toHaveTextContent('Save and continue');
    expect(buttonEl1.dataset).toHaveProperty('customButton', 'true');

    expect(buttonEl2).toHaveTextContent('Cancel');
    expect(buttonEl2.dataset).toHaveProperty('customLink', 'true');
  });

  describe('disabled', () => {
    it('matches snapshot', async () => {
      const { container } = await renderClient(<Button disabled>Save and continue</Button>, {
        moduleName: 'nhsuk-button',
      });

      expect(container).toMatchSnapshot('DisabledButton');
    });

    it('adds correct attributes for button type', async () => {
      const { modules } = await renderClient(<Button disabled>Save and continue</Button>, {
        moduleName: 'nhsuk-button',
      });

      const [buttonEl] = modules;
      expect(buttonEl).toBeDisabled();
    });
  });

  describe('secondary', () => {
    it('matches snapshot', async () => {
      const { container } = await renderClient(<Button secondary>Save and continue</Button>, {
        moduleName: 'nhsuk-button',
      });

      expect(container).toMatchSnapshot('SecondaryButton');
    });

    it('adds correct classes for button type', async () => {
      const { modules } = await renderClient(<Button secondary>Save and continue</Button>, {
        moduleName: 'nhsuk-button',
      });

      const [buttonEl] = modules;
      expect(buttonEl).toHaveClass('nhsuk-button--secondary');
    });
  });

  describe('reverse', () => {
    it('matches snapshot', async () => {
      const { container } = await renderClient(<Button reverse>Save and continue</Button>, {
        moduleName: 'nhsuk-button',
      });

      expect(container).toMatchSnapshot('ReverseButton');
    });

    it('adds correct classes for button type', async () => {
      const { modules } = await renderClient(<Button reverse>Save and continue</Button>, {
        moduleName: 'nhsuk-button',
      });

      const [buttonEl] = modules;
      expect(buttonEl).toHaveClass('nhsuk-button--reverse');
    });
  });

  it('adds aria props and disabled to disabled button', async () => {
    const { modules } = await renderClient(<Button disabled>Save and continue</Button>, {
      moduleName: 'nhsuk-button',
    });

    const [buttonEl] = modules;

    expect(buttonEl).toBeDisabled();
    expect(buttonEl).toHaveAttribute('type', 'submit');
    expect(buttonEl).toHaveAttribute('aria-disabled', 'true');
  });

  it('preventDoubleClick calls debounced function', async () => {
    jest.useFakeTimers();
    const clickHandler = jest.fn();

    const { modules } = await renderClient(
      <Button preventDoubleClick onClick={clickHandler}>
        Save and continue
      </Button>,
      { moduleName: 'nhsuk-button' },
    );

    const [buttonEl] = modules;

    buttonEl.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    buttonEl.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    jest.runAllTimers();

    buttonEl.click();
    expect(clickHandler).toHaveBeenCalledTimes(2);
  });

  it('preventDoubleClick=false calls original function', async () => {
    const clickHandler = jest.fn();

    const { modules } = await renderClient(
      <Button preventDoubleClick={false} onClick={clickHandler}>
        Save and continue
      </Button>,
      { moduleName: 'nhsuk-button' },
    );

    const [buttonEl] = modules;

    buttonEl.click();
    expect(clickHandler).toHaveBeenCalledTimes(1);

    buttonEl.click();
    expect(clickHandler).toHaveBeenCalledTimes(2);

    buttonEl.click();
    expect(clickHandler).toHaveBeenCalledTimes(3);
  });
});

describe('Button as a link', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(<Button href="/">Find my location</Button>, {
      moduleName: 'nhsuk-button',
    });

    expect(container).toMatchSnapshot('LinkButton');
  });

  it('renders child text as expected', async () => {
    const { modules } = await renderClient(<Button href="/">Find my location</Button>, {
      moduleName: 'nhsuk-button',
    });

    const [buttonEl] = modules;
    expect(buttonEl).toHaveTextContent('Find my location');
  });

  describe('button types', () => {
    describe('secondary', () => {
      it('matches snapshot', async () => {
        const { container } = await renderClient(
          <Button href="/" secondary>
            Find my location
          </Button>,
          { moduleName: 'nhsuk-button' },
        );

        expect(container).toMatchSnapshot('SecondaryButton');
      });

      it('adds correct classes for type - secondary', async () => {
        const { modules } = await renderClient(
          <Button href="/" secondary>
            Find my location
          </Button>,
          { moduleName: 'nhsuk-button' },
        );

        const [buttonEl] = modules;
        expect(buttonEl).toHaveClass('nhsuk-button--secondary');
      });
    });

    describe('reverse', () => {
      it('matches snapshot', async () => {
        const { container } = await renderClient(
          <Button href="/" reverse>
            Log out
          </Button>,
          { moduleName: 'nhsuk-button' },
        );

        expect(container).toMatchSnapshot('ReverseButton');
      });

      it('adds correct classes for type - reverse', async () => {
        const { modules } = await renderClient(
          <Button href="/" reverse>
            Log out
          </Button>,
          { moduleName: 'nhsuk-button' },
        );

        const [buttonEl] = modules;
        expect(buttonEl).toHaveClass('nhsuk-button--reverse');
      });
    });
  });
});

describe('Button as a button', () => {
  it('renders a button when not given a href', async () => {
    const { modules } = await renderClient(<Button>Save and continue</Button>, {
      moduleName: 'nhsuk-button',
    });

    const [buttonEl] = modules;

    expect(buttonEl.tagName).toBe('BUTTON');
    expect(buttonEl).toHaveClass('nhsuk-button');
    expect(buttonEl).toHaveTextContent('Save and continue');
    expect(buttonEl).not.toHaveAttribute('href');
  });

  it('renders an anchor when given a href', async () => {
    const { modules } = await renderClient(<Button href="/">Find my location</Button>, {
      moduleName: 'nhsuk-button',
    });

    const [buttonEl] = modules;

    expect(buttonEl.tagName).toBe('A');
    expect(buttonEl).toHaveClass('nhsuk-button');
    expect(buttonEl).toHaveTextContent('Find my location');
    expect(buttonEl).toHaveAttribute('href', '/');
  });
});
