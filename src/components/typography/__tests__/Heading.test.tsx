import { render } from '@testing-library/react';

import { HeadingLevel, type HeadingLevelProps } from '..';

describe('HeadingLevel', () => {
  it.each<Required<Pick<HeadingLevelProps, 'headingLevel'>>>([
    { headingLevel: 'h1' },
    { headingLevel: 'h2' },
    { headingLevel: 'h3' },
    { headingLevel: 'h4' },
    { headingLevel: 'h5' },
    { headingLevel: 'h6' },
  ])('renders with custom heading level $headingLevel', (props) => {
    const { container } = render(<HeadingLevel {...props} />);

    const headingEl = container.querySelector(props.headingLevel);

    expect(headingEl).toHaveProperty('tagName', props?.headingLevel?.toUpperCase());
  });

  it.each<Required<Pick<HeadingLevelProps, 'size'>>>([
    { size: 's' },
    { size: 'm' },
    { size: 'l' },
    { size: 'xl' },
  ])('renders with custom size $size', (props) => {
    const { container } = render(<HeadingLevel {...props} />);

    const headingEl = container.querySelector('h3');

    expect(headingEl).toHaveClass(`nhsuk-heading-${props.size}`);
  });

  it('renders with visually hidden text', () => {
    const { container } = render(<HeadingLevel visuallyHiddenText="Custom" />);

    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(visuallyHiddenEl).toHaveTextContent('Custom:');
  });

  it('renders with visually hidden HTML', () => {
    const { container } = render(
      <HeadingLevel
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
    render(<HeadingLevel headingLevel="h7" />);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenLastCalledWith('HeadingLevel: Invalid headingLevel prop: h7');

    consoleSpy.mockRestore();
  });
});
