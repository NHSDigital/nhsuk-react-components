import React from 'react';
import { Promo } from '../../src/deprecated';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Promo> = {
  title: 'Deprecated/Promo',
  component: Promo,
};
export default meta;
type Story = StoryObj<typeof Promo>;

Promo.Heading.displayName = 'Promo.Heading';
Promo.Description.displayName = 'Promo.Description';

export const Standard: Story = {
  render: (args) => (
    <Promo href="#">
      <Promo.Heading>Save a life: give blood</Promo.Heading>
      <Promo.Description>
        Please register today. Donating blood is easy, and saves lives.
      </Promo.Description>
    </Promo>
  ),
};

export const WithImage: Story = {
  render: (args) => (
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
  ),
};

export const WithNoDescription: Story = {
  render: (args) => (
    <Promo
      href="https://www.nhs.uk"
      imageSrc="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg"
      imageProps={{ alt: '' }}
    >
      <Promo.Heading>Save a life: give blood</Promo.Heading>
    </Promo>
  ),
};

export const SmallPromo: Story = {
  render: (args) => (
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
  ),
};

export const PromoGroup: Story = {
  render: (args) => (
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
  ),
};
