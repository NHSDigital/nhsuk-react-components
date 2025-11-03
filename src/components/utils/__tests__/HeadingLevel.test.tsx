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
  ])('renders the correct elements - %s', (props) => {
    const { container } = render(<HeadingLevel {...props} />);

    const headingEl = container.querySelector(props.headingLevel);

    expect(headingEl).toHaveProperty('tagName', props?.headingLevel?.toUpperCase());
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
