import React from 'react';
import { Hero } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const HeroWithHeadingAndContent: Story = {
  render: () => (
    <Hero>
      <Hero.Heading>We&apos;re here for you.</Hero.Heading>
      <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
    </Hero>
  ),
};

export const HeroWithImageHeadingAndContent: Story = {
  render: () => (
    <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg">
      <Hero.Heading>We&apos;re here for you.</Hero.Heading>
      <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
    </Hero>
  ),
};

export const HeroWithImageOnly: Story = {
  render: () => (
    <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg" />
  ),
};
