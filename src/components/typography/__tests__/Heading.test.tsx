import { render } from '@testing-library/react';

import { Heading, type HeadingProps } from '..';

describe('Heading', () => {
  it.each<Required<Pick<HeadingProps, 'headingLevel'>>>([
    { headingLevel: 'h1' },
    { headingLevel: 'h2' },
    { headingLevel: 'h3' },
    { headingLevel: 'h4' },
    { headingLevel: 'h5' },
    { headingLevel: 'h6' },
  ])('renders with custom heading level $headingLevel', (props) => {
    const { container } = render(<Heading {...props} />);

    const headingEl = container.querySelector(props.headingLevel);

    expect(headingEl).toHaveProperty('tagName', props.headingLevel?.toUpperCase());
  });

  it.each<Required<Pick<HeadingProps, 'size'>>>([
    { size: 's' },
    { size: 'm' },
    { size: 'l' },
    { size: 'xl' },
  ])('renders with custom size $size', (props) => {
    const { container } = render(<Heading {...props} />);

    const headingEl = container.querySelector('h1');

    expect(headingEl).toHaveClass(`nhsuk-heading-${props.size}`);
  });

  it('renders with visually hidden text', () => {
    const { container } = render(<Heading visuallyHiddenText="Custom" />);

    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(visuallyHiddenEl).toHaveTextContent('Custom:');
  });

  it('renders with visually hidden HTML', () => {
    const { container } = render(
      <Heading
        visuallyHiddenText={
          <>
            Custom <em>with HTML</em>
          </>
        }
      />,
    );

    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(visuallyHiddenEl).toHaveTextContent('Custom with HTML:');
    expect(visuallyHiddenEl).toContainHTML('Custom <em>with HTML</em>:');
  });

  it('console.warn when headingLevel is invalid', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    // @ts-expect-error - testing invalid prop
    render(<Heading headingLevel="h7" />);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenLastCalledWith('Heading: Invalid headingLevel prop: h7');

    consoleSpy.mockRestore();
  });
});
