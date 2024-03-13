import { render } from '@testing-library/react';
import React from 'react';
import Radios from '../Radios';

describe('Radios', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Radios id="example" name="example">
        <Radios.Radio id="example-1" value="yes">
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no">
          No
        </Radios.Radio>
      </Radios>,
    );

    expect(container).toMatchSnapshot();
  });

  it('does not render the conditional content if checked is false', () => {
    const { container } = render(
      <Radios id="example" name="example">
        <Radios.Radio
          id="example-1"
          value="yes"
          checked={false}
          conditional={<p className="conditional-test">Test</p>}
        >
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no">
          No
        </Radios.Radio>
      </Radios>,
    );

    expect(container.querySelector('.conditional-test')).toBeFalsy();
  });

  it('renders the conditional content if the radio reference = selected radio', () => {
    const { container } = render(
      <Radios id="example" name="example">
        <Radios.Radio
          id="example-1"
          value="yes"
          checked={true}
          conditional={<p className="conditional-test">Test</p>}
        >
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no">
          No
        </Radios.Radio>
      </Radios>,
    );

    const conditionalElement = container.querySelector('.conditional-test');
    expect(conditionalElement?.textContent).toBe('Test');
  });
});
