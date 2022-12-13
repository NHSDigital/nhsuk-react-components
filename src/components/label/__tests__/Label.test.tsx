import React from 'react';
import { shallow } from 'enzyme';
import Label from '../Label';

describe('Label', () => {
  it('Label', () => {
    const element = shallow(<Label>Text</Label>);
    expect(element.children().text()).toBe('Text')
    /* 
      Need to do .html as BaseLabel is used in Label.
      I don't think snapshots is the best way to do this
    */
    expect(element.html()).toBe('<label class="nhsuk-label">Text</label>')
    element.unmount();
  });
  
  it('Label with size m', () => {
    const element = shallow(<Label size='m'>Text</Label>);
    expect(element.children().text()).toBe('Text')
    /* 
      Need to do .html as BaseLabel is used in Label.
      I don't think snapshots is the best way to do this
    */
    expect(element.html()).toBe('<label class="nhsuk-label nhsuk-label--m">Text</label>')
    element.unmount();
  });

  it('Label with heading prop', () => {
    const element = shallow(<Label isPageHeading>Text</Label>);
    expect(element.children().children().text()).toBe('Text')
    /* 
      Need to do .html as BaseLabel is used in Label.
      I don't think snapshots is the best way to do this
    */
    expect(element.html()).toBe('<h1 class="nhsuk-label-wrapper"><label class="nhsuk-label nhsuk-label--xl">Text</label></h1>')
    element.unmount();
  });

});
