/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Promo } from '../src';

export const Standard = () => (
  <Promo href="https://www.nhs.uk">
    <Promo.Heading>Save a life: give blood</Promo.Heading>
    <Promo.Description>
      Please register today. Donating blood is easy, and saves lives.
    </Promo.Description>
  </Promo>
);

export const WithImage = () => (
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
);

export const WithNoDescription = () => (
  <Promo
    href="https://www.nhs.uk"
    imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
    imageProps={{ alt: '' }}
  >
    <Promo.Heading>Save a life: give blood</Promo.Heading>
  </Promo>
);

export const SmallPromo = () => (
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
);

export const PromoGroup = () => (
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
);

export default {
  title: 'Components/Promo',
  component: Promo,
};
