import React from 'react';
import HeadingLevel from '../HeadingLevel';
import { shallow } from 'enzyme';

describe('HeadingLevel', () => {
  it('renders the correct elements', () => {
    const h1Element = shallow(<HeadingLevel headingLevel="h1"></HeadingLevel>);
    const H1Element = shallow(<HeadingLevel headingLevel="H1"></HeadingLevel>);
    const h2Element = shallow(<HeadingLevel headingLevel="h2"></HeadingLevel>);
    const H2Element = shallow(<HeadingLevel headingLevel="H2"></HeadingLevel>);
    const h3Element = shallow(<HeadingLevel headingLevel="h3"></HeadingLevel>);
    const H3Element = shallow(<HeadingLevel headingLevel="H3"></HeadingLevel>);
    const h4Element = shallow(<HeadingLevel headingLevel="h4"></HeadingLevel>);
    const H4Element = shallow(<HeadingLevel headingLevel="H4"></HeadingLevel>);
    const h5Element = shallow(<HeadingLevel headingLevel="h5"></HeadingLevel>);
    const H5Element = shallow(<HeadingLevel headingLevel="H5"></HeadingLevel>);
    const h6Element = shallow(<HeadingLevel headingLevel="h6"></HeadingLevel>);
    const H6Element = shallow(<HeadingLevel headingLevel="H6"></HeadingLevel>);

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
});
