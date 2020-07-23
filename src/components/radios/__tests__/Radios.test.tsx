import React from 'react';
import { mount } from 'enzyme';
import Radios from '../Radios';

describe('Radios', () => {
  it('matches snapshot', () => {
    const element = mount(
      <Radios id="example" name="example">
        <Radios.Radio id="example-1" value="yes">
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no">
          No
        </Radios.Radio>
      </Radios>,
    );
    expect(element).toMatchSnapshot();
    element.unmount();
  });

  it('does not render the conditional content if checked is false', () => {
    const element = mount(
      <Radios id="example" name="example">
        <Radios.Radio id="example-1" value="yes" checked={false} conditional={<p>Test</p>}>
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no">
          No
        </Radios.Radio>
      </Radios>,
    );
    element.find('input#example-1').simulate('change');
    expect(element).toMatchSnapshot();
    element.unmount();
  });

  it('renders the conditional content if the radio reference = selected radio', () => {
    const element = mount(
      <Radios id="example" name="example">
        <Radios.Radio id="example-1" value="yes" conditional={<p>Test</p>}>
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no">
          No
        </Radios.Radio>
      </Radios>,
    );
    element.find('input#example-1').simulate('change');
    expect(element).toMatchSnapshot();
    element.unmount();
  });
});
