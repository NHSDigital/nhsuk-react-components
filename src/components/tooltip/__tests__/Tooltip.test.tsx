import React from 'react';
import {render} from '@testing-library/react'
import Tooltip from '..';

describe('Tooltip', () => {
  it('Matches Snapshot', () => {
    const component = render(<Tooltip tooltip="Tooltip!">Hover Over Me</Tooltip>);
    expect(component.container).toMatchSnapshot();
  });

  it('Passes through IDs', () => {
    const componentWithoutId = render(<Tooltip tooltip="Tooltip!">Hover Over Me</Tooltip>);
    const componentWithId = render(
      <Tooltip tooltip="Tooltip!" id="test-id">
        Hover Over Me
      </Tooltip>,
    );

    expect(componentWithoutId.container.querySelector('#test-id')).toBeNull();
    expect(componentWithoutId.container).toMatchSnapshot();

    expect(componentWithId.container.querySelector('#test-id-tooltip-text')).toBeTruthy();
    expect(componentWithId.container).toMatchSnapshot();

  })
});
