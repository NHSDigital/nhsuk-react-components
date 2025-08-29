import React from 'react';
import {render} from '@testing-library/react'
import Tag from '..';

describe('Tag', () => {
  it('matches snapshot', () => {
    const component = render(<Tag>Tag</Tag>);
    expect(component.container).toMatchSnapshot();
    expect(component.container.textContent).toBe('Tag');
  });

  it('applies classes', () => {
    const unstyledTag = render(<Tag />);
    const colouredTag = render(<Tag color="aqua-green" />);
    const customTag = render(<Tag color="aqua-green" className="customClassName" />);

    expect(unstyledTag.container.querySelector('span')?.className).toBe('nhsuk-tag')
    expect(colouredTag.container.querySelector('span')?.className).toBe('nhsuk-tag nhsuk-tag--aqua-green')
    expect(customTag.container.querySelector('span')?.className).toBe('nhsuk-tag nhsuk-tag--aqua-green customClassName')
    });
});
