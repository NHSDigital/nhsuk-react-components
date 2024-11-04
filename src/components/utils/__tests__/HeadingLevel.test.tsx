import React from 'react';
import { render } from '@testing-library/react';
import HeadingLevel, { HeadingLevelType } from '../HeadingLevel';

describe('HeadingLevel', () => {
  it.each<HeadingLevelType>([
    'h1',
    'H1',
    'h2',
    'H2',
    'h3',
    'H3',
    'h4',
    'H4',
    'h5',
    'H5',
    'h6',
    'H6',
  ])('renders the correct elements - %s', (headingLevel: HeadingLevelType) => {
    const { container } = render(<HeadingLevel headingLevel={headingLevel} />);

    expect(container.querySelector(String(headingLevel).toLowerCase())).toBeTruthy();
  });

  it('console.warn when headingLevel is invalid', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    // @ts-expect-error - testing invalid prop
    render(<HeadingLevel headingLevel="h7" />);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('HeadingLevel: Invalid headingLevel prop: h7');

    consoleSpy.mockRestore();
  });
});
