import { render } from '@testing-library/react';
import React from 'react';
import Radios from '../Radios';

describe('Radios', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Radios id="example" name="example">
        <Radios.Item id="example-1" value="yes">
          Yes
        </Radios.Item>
        <Radios.Item id="example-2" value="no">
          No
        </Radios.Item>
      </Radios>,
    );

    expect(container).toMatchSnapshot();
  });

  it('does not render the conditional content if checked is false', () => {
    const { container } = render(
      <Radios id="example" name="example">
        <Radios.Item
          id="example-1"
          value="yes"
          checked={false}
          conditional={<p className="conditional-test">Test</p>}
        >
          Yes
        </Radios.Item>
        <Radios.Item id="example-2" value="no">
          No
        </Radios.Item>
      </Radios>,
    );

    expect(container.querySelector('.conditional-test')?.parentElement).toHaveClass(
      'nhsuk-radios__conditional--hidden',
    );
  });

  it('renders the conditional content if the radio reference = selected radio', () => {
    const { container } = render(
      <Radios id="example" name="example">
        <Radios.Item
          id="example-1"
          value="yes"
          checked={true}
          conditional={<p className="conditional-test">Test</p>}
        >
          Yes
        </Radios.Item>
        <Radios.Item id="example-2" value="no">
          No
        </Radios.Item>
      </Radios>,
    );

    const conditionalElement = container.querySelector('.conditional-test');
    expect(conditionalElement?.textContent).toBe('Test');
  });
});
