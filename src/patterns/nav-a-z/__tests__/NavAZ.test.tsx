/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
import React from 'react';
import { shallow, mount } from 'enzyme';
import NavAZ from '..';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

describe('NavAZ', () => {
  it('matches snapshot', () => {
    const element = shallow(<NavAZ />);
    expect(element).toMatchSnapshot('NavAZ');
    element.unmount();
  });

  it('renders fullAlphabet', () => {
    const element = mount(<NavAZ fullAlphabet />);
    const expectedElements = alphabet.split('').map((letter) => (
      <a key={letter} className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block">
        {letter}
      </a>
    ));
    expect(element.containsAllMatchingElements(expectedElements)).toBeTruthy();
    element.unmount();
  });

  it('renders fullAlphabet with letters removed', () => {
    const element = mount(<NavAZ fullAlphabet removedLetters={['A', 'B']} />);
    expect(
      element.containsAnyMatchingElements([
        <a className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block">A</a>,
        <a className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block">B</a>,
      ]),
    ).toBeFalsy();
    element.unmount();
  });

  it('renders fullAlphabet with letters disabled', () => {
    const element = mount(<NavAZ fullAlphabet disabledLetters={['A', 'B']} />);
    expect(
      element.containsAnyMatchingElements([
        <a className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block">A</a>,
        <a className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block">B</a>,
      ]),
    ).toBeFalsy();
    expect(
      element.containsAllMatchingElements([
        <span className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block nhsuk-u-secondary-text-color">A</span>,
        <span className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block nhsuk-u-secondary-text-color">B</span>,
      ]),
    ).toBeTruthy();
    element.unmount();
  });

  it('passes through children', () => {
    const element = mount(
      <NavAZ>
        <p id="child">Child</p>
      </NavAZ>,
    );
    expect(element.containsMatchingElement(<p id="child">Child</p>)).toBeTruthy();
    element.unmount();
  });

  it('renders individual letters', () => {
    const element = mount(<NavAZ letters={['A', 'B']} />);
    expect(
      element.containsAllMatchingElements([
        <a className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block">A</a>,
        <a className="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block">B</a>,
      ]),
    ).toBeTruthy();
    element.unmount();
  });
});
