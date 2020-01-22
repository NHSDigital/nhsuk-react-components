import React from 'react';
import Hero from '..';
import { shallow, mount } from 'enzyme';

describe('Hero', () => {
  it('matches snapshot', () => {
    const component = shallow(<Hero />);
    expect(component.hasClass('nhsuk-hero--image')).toBeFalsy();
    expect(component).toMatchSnapshot('Hero');
    component.unmount();
  });

  it('adds correct attributes when imageSrc is provided', () => {
    const component = shallow(<Hero imageSrc="image.png"></Hero>);
    expect(component.hasClass('nhsuk-hero--image')).toBeTruthy();
    expect(component.prop('style')).toEqual({ backgroundImage: "url('image.png')" });
    expect(component.find('.nhsuk-hero__overlay').exists()).toBeTruthy();
    component.unmount();
  });

  it('adds correct attributes when imageSrc and children are provided', () => {
    const component = shallow(<Hero imageSrc="image.png">Children</Hero>);
    expect(component.hasClass('nhsuk-hero--image')).toBeTruthy();
    expect(component.hasClass('nhsuk-hero--image-description')).toBeTruthy();
    expect(component.prop('style')).toEqual({ backgroundImage: "url('image.png')" });
    expect(component.find('.nhsuk-hero__overlay').exists()).toBeTruthy();
    component.unmount();
  });

  it('renders HeroContent when there are children', () => {
    const component = mount(<Hero>Children</Hero>);
    expect(component.find('.nhsuk-width-container').exists()).toBeTruthy();
    expect(component.find('.nhsuk-width-container').hasClass('nhsuk-hero--border')).toBeFalsy();
    expect(component.find('.nhsuk-hero-content').exists()).toBeFalsy();
    expect(component.find('.nhsuk-hero__arrow').exists()).toBeFalsy();
    expect(component.find('.nhsuk-hero__wrapper').exists()).toBeTruthy();
    component.unmount();
  });

  it('renders HeroContent when there are children and imageSrc', () => {
    const component = mount(<Hero imageSrc="image.png">Children</Hero>);
    expect(component.find('.nhsuk-width-container').exists()).toBeTruthy();
    expect(component.find('.nhsuk-width-container').hasClass('nhsuk-hero--border')).toBeTruthy();
    expect(component.find('.nhsuk-hero-content').exists()).toBeTruthy();
    expect(component.find('.nhsuk-hero__arrow').exists()).toBeTruthy();
    expect(component.find('.nhsuk-hero__wrapper').exists()).toBeFalsy();
    component.unmount();
  });

  it('HeroContent renders null with no children', () => {
    const component = mount(<Hero></Hero>);
    expect(component.find('.nhsuk-width-container').exists()).toBeFalsy();
    component.unmount();
  });

  describe('Hero.Text', () => {
    it('matches snapshot', () => {
      const component = shallow(<Hero.Text>Text</Hero.Text>);
      expect(component.text()).toBe('Text');
      expect(component).toMatchSnapshot('Hero.Text');
      component.unmount();
    });
  });

  describe('Hero.Heading', () => {
    it('matches snapshot', () => {
      const component = shallow(<Hero.Heading>Text</Hero.Heading>);
      expect(component.text()).toBe('Text');
      expect(component).toMatchSnapshot('Hero.Heading');
      component.unmount();
    });
  });
});
