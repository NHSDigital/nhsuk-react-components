/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Promo } from '../src';

const stories = storiesOf('Promo', module);

stories
  .add('Standard', () => (
    <Promo href="https://www.nhs.uk">
      <Promo.Heading>Save a life: give blood</Promo.Heading>
      <Promo.Description>
        Please register today. Donating blood is easy, and saves lives.
      </Promo.Description>
    </Promo>
  ))
  .add('With Image', () => (
    <Promo
      href="https://www.nhs.uk"
      imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
      imageProps={{ alt: '' }}
    >
      <Promo.Heading>Save a life: give blood</Promo.Heading>
      <Promo.Description>
        Please register today. Donating blood is easy, and saves lives.
      </Promo.Description>
    </Promo>
  ))
  .add('With no description', () => (
    <Promo
      href="https://www.nhs.uk"
      imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
      imageProps={{ alt: '' }}
    >
      <Promo.Heading>Save a life: give blood</Promo.Heading>
    </Promo>
  ))
  .add('Small Promo', () => (
    <Promo
      small
      href="https://www.nhs.uk"
      imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
      imageProps={{ alt: '' }}
    >
      <Promo.Heading>Access your GP record</Promo.Heading>
      <Promo.Description>
        Please register today. Donating blood is easy, and saves lives.
      </Promo.Description>
    </Promo>
  ))
  .add('Promo Group', () => (
    <>
      <Promo.Group>
        <Promo
          href="https://www.nhs.uk"
          imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
          imageProps={{ alt: '' }}
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Description>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Description>
        </Promo>
        <Promo
          href="https://www.nhs.uk"
          imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
          imageProps={{ alt: '' }}
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Description>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Description>
        </Promo>
      </Promo.Group>
      <Promo.Group>
        <Promo
          href="https://www.nhs.uk"
          imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
          imageProps={{ alt: '' }}
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Description>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Description>
        </Promo>
        <Promo
          href="https://www.nhs.uk"
          imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
          imageProps={{ alt: '' }}
        >
          <Promo.Heading>Save a life: give blood</Promo.Heading>
          <Promo.Description>
            Please register today. Donating blood is easy, and saves lives.
          </Promo.Description>
        </Promo>
      </Promo.Group>
    </>
  ));
