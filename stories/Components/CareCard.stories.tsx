import React from 'react';
import { CareCard } from '../../src';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CareCard> = {
  title: 'Components/CareCard',
  component: CareCard,
};
export default meta;
type Story = StoryObj<typeof CareCard>;
export const NonUrgent: Story = {
  render: (): JSX.Element => (
    <CareCard type="non-urgent">
      <CareCard.Heading>Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
      </CareCard.Content>
    </CareCard>
  ),
  name: 'Non-Urgent',
};

export const Urgent: Story = {
  render: () => (
    <CareCard type="urgent">
      <CareCard.Heading>Ask for an urgent GP appointment if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re an adult and have chickenpox</li>
          <li>
            you&apos;re pregnant and haven&apos;t had chickenpox before and you&apos;ve been near
            someone with it
          </li>
          <li>
            you have a weakened immune system and you&apos;ve been near someone with chickenpox
          </li>
          <li>you think your newborn baby has chickenpox</li>
        </ul>
        <p>
          In these situations, your GP can prescribe medicine to prevent complications. You need to
          take it within 24 hours of the spots coming out.
        </p>
      </CareCard.Content>
    </CareCard>
  ),
};

export const Immediate: Story = {
  render: () => (
    <CareCard type="immediate">
      <CareCard.Heading>Call 999 if you have sudden chest pain that:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>spreads to your arms, back, neck or jaw</li>
          <li>makes your chest feel tight or heavy</li>
          <li>also started with shortness of breath, sweating and feeling or being sick</li>
        </ul>
        <p>
          You could be having a heart attack. Call 999 immediately as you need immediate treatment
          in hospital.
        </p>
      </CareCard.Content>
    </CareCard>
  ),
};

export const WithoutVisuallyHiddenText: Story = {
  render: () => (
    <CareCard type="non-urgent">
      <CareCard.Heading visuallyHiddenText={false}>Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it&apos;s chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </CareCard.Content>
    </CareCard>
  ),
};

export const WithCustomVisuallyHiddenText: Story = {
  render: () => (
    <CareCard type="non-urgent">
      <CareCard.Heading visuallyHiddenText="Custom Hidden Text">Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it&apos;s chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </CareCard.Content>
    </CareCard>
  ),
};
