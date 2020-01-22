/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from '../src';

const stories = storiesOf('Hero', module);

stories
  .add('With Heading and Content', () => (
    <Hero>
      <Hero.Heading>We're here for you.</Hero.Heading>
      <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
    </Hero>
  ))
  .add('With Image, Heading and Content', () => (
    <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg">
      <Hero.Heading>We're here for you.</Hero.Heading>
      <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
    </Hero>
  ))
  .add('With Image Only', () => (
    <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg" />
  ));
