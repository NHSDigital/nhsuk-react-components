import React from 'react';
import { render } from '@testing-library/react'

import { WarningIcon } from '..';

describe('WarningIcon', () => {
  it('matches snapshot', () => {
    const component = render(<WarningIcon />);
    expect(component.container).toMatchSnapshot();
  });
  it('matches snapshot when solid', () => {
    const component = render(<WarningIcon inColour={true} />);
    expect(component.container).toMatchSnapshot();
  });
  it('matches snapshot when transparent', () => {
    const component = render(<WarningIcon inColour={false} />);
    expect(component.container).toMatchSnapshot();
  });
});
