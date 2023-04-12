import React from 'react';
import { shallow } from 'enzyme';
import HeadingLevel from '../HeadingLevel';

describe('HeadingLevel', () => {
  it('renders the correct elements', () => {
    const h1Element = shallow(<HeadingLevel headingLevel="h1" />);
    const H1Element = shallow(<HeadingLevel headingLevel="H1" />);
    const h2Element = shallow(<HeadingLevel headingLevel="h2" />);
    const H2Element = shallow(<HeadingLevel headingLevel="H2" />);
    const h3Element = shallow(<HeadingLevel headingLevel="h3" />);
    const H3Element = shallow(<HeadingLevel headingLevel="H3" />);
    const h4Element = shallow(<HeadingLevel headingLevel="h4" />);
    const H4Element = shallow(<HeadingLevel headingLevel="H4" />);
    const h5Element = shallow(<HeadingLevel headingLevel="h5" />);
    const H5Element = shallow(<HeadingLevel headingLevel="H5" />);
    const h6Element = shallow(<HeadingLevel headingLevel="h6" />);
    const H6Element = shallow(<HeadingLevel headingLevel="H6" />);

    expect(h1Element.type()).toBe('h1');
    expect(H1Element.type()).toBe('h1');
    expect(h2Element.type()).toBe('h2');
    expect(H2Element.type()).toBe('h2');
    expect(h3Element.type()).toBe('h3');
    expect(H3Element.type()).toBe('h3');
    expect(h4Element.type()).toBe('h4');
    expect(H4Element.type()).toBe('h4');
    expect(h5Element.type()).toBe('h5');
    expect(H5Element.type()).toBe('h5');
    expect(h6Element.type()).toBe('h6');
    expect(H6Element.type()).toBe('h6');

    h1Element.unmount();
    H1Element.unmount();
    h2Element.unmount();
    H2Element.unmount();
    h3Element.unmount();
    H3Element.unmount();
    h4Element.unmount();
    H4Element.unmount();
    h5Element.unmount();
    H5Element.unmount();
    h6Element.unmount();
    H6Element.unmount();
  });

  it("console.warn when headingLevel is invalid", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    // @ts-expect-error - testing invalid prop
    shallow(<HeadingLevel headingLevel="h7" />);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      'HeadingLevel: Invalid headingLevel prop: h7');
    consoleSpy.mockRestore();
  });
});
