import React from 'react';
import { Hero } from '../src';

export const HeroWithHeadingAndContent = () => (
  <Hero>
    <Hero.Heading>We're here for you.</Hero.Heading>
    <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
  </Hero>
);

export const HeroWithImageHeadingAndContent = () => (
  <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg">
    <Hero.Heading>We're here for you.</Hero.Heading>
    <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
  </Hero>
);

export const HeroWithImageOnly = () => (
  <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg" />
);

export default {
  title: 'Components/Hero',
  component: Hero,
};
