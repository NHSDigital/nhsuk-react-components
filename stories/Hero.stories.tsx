import React from 'react';
import { Hero } from '../src';

export const HeroWithHeadingAndContent = (): JSX.Element => (
  <Hero>
    <Hero.Heading>We&apos;re here for you.</Hero.Heading>
    <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
  </Hero>
);

export const HeroWithImageHeadingAndContent = (): JSX.Element => (
  <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg">
    <Hero.Heading>We&apos;re here for you.</Hero.Heading>
    <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
  </Hero>
);

export const HeroWithImageOnly = (): JSX.Element => (
  <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg" />
);

export default {
  title: 'Components/Hero',
  component: Hero,
};
