import { render } from '@testing-library/react';
import React, { createRef } from 'react';
import { Hero } from '..';

describe('Hero', () => {
  it('matches snapshot', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.nhsuk-hero--image')).toBeFalsy();
    expect(container).toMatchSnapshot('Hero');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<Hero ref={ref} />);

    const heroEl = container.querySelector('section');

    expect(ref.current).toBe(heroEl);
    expect(ref.current).toHaveClass('nhsuk-hero');
  });

  it('adds correct attributes when imageSrc is provided', () => {
    const { container } = render(<Hero imageSrc="image.png" />);

    expect(container.querySelector('.nhsuk-hero--image')).toBeTruthy();
    expect(container.querySelector('.nhsuk-hero__overlay')).toBeTruthy();
    expect(container.querySelector('.nhsuk-hero.nhsuk-hero--image')).toHaveStyle(
      'background-image: url(image.png);',
    );
  });

  it('adds correct attributes when imageSrc and children are provided', () => {
    const { container } = render(<Hero imageSrc="image.png">Children</Hero>);

    expect(container.querySelector('.nhsuk-hero--image')).toBeTruthy();
    expect(container.querySelector('.nhsuk-hero--image-description')).toBeTruthy();
    expect(container.querySelector('.nhsuk-hero.nhsuk-hero--image')).toHaveStyle(
      'background-image: url(image.png);',
    );
    expect(container.querySelector('.nhsuk-hero__overlay')).toBeTruthy();
  });

  it('renders HeroContent when there are children', () => {
    const { container } = render(<Hero>Children</Hero>);

    expect(container.querySelector('.nhsuk-width-container')).toBeTruthy();
    expect(container.querySelector('.nhsuk-width-container.nhsuk-hero--border')).toBeFalsy();
    expect(container.querySelector('.nhsuk-hero-content')).toBeFalsy();
    expect(container.querySelector('.nhsuk-hero__arrow')).toBeFalsy();
    expect(container.querySelector('.nhsuk-hero__wrapper')).toBeTruthy();
  });

  it('renders HeroContent when there are children and imageSrc', () => {
    const { container } = render(<Hero imageSrc="image.png">Children</Hero>);

    expect(container.querySelector('.nhsuk-width-container')).toBeTruthy();
    expect(container.querySelector('.nhsuk-width-container.nhsuk-hero--border')).toBeTruthy();
    expect(container.querySelector('.nhsuk-hero-content')).toBeTruthy();
    expect(container.querySelector('.nhsuk-hero__arrow')).toBeTruthy();
    expect(container.querySelector('.nhsuk-hero__wrapper')).toBeFalsy();
  });

  it('HeroContent renders null with no children', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.nhsuk-width-container')).toBeFalsy();
  });

  describe('Hero.Text', () => {
    it('matches snapshot', () => {
      const { container } = render(<Hero.Text>Text</Hero.Text>);

      expect(container.textContent).toBe('Text');
      expect(container).toMatchSnapshot('Hero.Text');
    });
  });

  describe('Hero.Heading', () => {
    it('matches snapshot', () => {
      const { container } = render(<Hero.Heading>Text</Hero.Heading>);

      expect(container.textContent).toBe('Text');
      expect(container).toMatchSnapshot('Hero.Heading');
    });
  });
});
