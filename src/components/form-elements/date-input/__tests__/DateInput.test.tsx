import React from 'react';
import { render } from '@testing-library/react';
import DateInput from '../DateInput';

describe('DateInput', () => {
  it('matches snapshot', () => {
    const { container } = render(<DateInput id="testInput" name="testInput" />);

    expect(container).toMatchSnapshot();
  });

  // previous tests have been removed - they're testing react, not the component. New ones to be added under NUT-4646
});
