import { render } from '@testing-library/react';
import { type ComponentPropsWithoutRef } from 'react';
import { Tag } from '..';

describe('Tag', () => {
  it('matches snapshot', () => {
    const { container } = render(<Tag>Active</Tag>);

    expect(container).toMatchSnapshot();
  });

  it('renders a nhsuk-tag class', () => {
    const { container } = render(<Tag>Active</Tag>);

    expect(container.querySelector('strong.nhsuk-tag')).toBeTruthy();
  });

  it.each<ComponentPropsWithoutRef<typeof Tag>['modifier']>([
    'white',
    'grey',
    'green',
    'aqua-green',
    'blue',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
  ])('adds colour class %s ', (colour) => {
    const { container } = render(<Tag modifier={colour} />);

    expect(container.querySelector(`strong.nhsuk-tag.nhsuk-tag--${colour}`)).toBeTruthy();
  });
});
