import { Story } from '@storybook/react';
import React from 'react';
import { Hero } from '../../src';

export const HeroWithHeadingAndContent: Story = (args) => (
  <Hero {...args}>
    <Hero.Heading>We&apos;re here for you.</Hero.Heading>
    <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
  </Hero>
);

export const HeroWithImageHeadingAndContent: Story = (args) => (
  <Hero {...args}>
    <Hero.Heading>We&apos;re here for you.</Hero.Heading>
    <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
  </Hero>
);
HeroWithImageHeadingAndContent.args = {
  imageSrc: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
};

export const HeroWithImageOnly: Story = (args) => <Hero {...args} />;
HeroWithImageOnly.args = {
  imageSrc: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
};

export default {
  title: 'Components/Hero',
  component: Hero,
};
