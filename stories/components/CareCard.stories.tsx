import type { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { CareCard } from '../../src';

export const NonUrgent: Story<ComponentProps<typeof CareCard>> = (args) => (
  <CareCard {...args}>
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
);
NonUrgent.args = { type: 'non-urgent' };
NonUrgent.storyName = 'Non-Urgent';

export const Urgent: Story<ComponentProps<typeof CareCard>> = (args) => (
  <CareCard {...args}>
    <CareCard.Heading>Ask for an urgent GP appointment if:</CareCard.Heading>
    <CareCard.Content>
      <ul>
        <li>you&apos;re an adult and have chickenpox</li>
        <li>
          you&apos;re pregnant and haven&apos;t had chickenpox before and you&apos;ve been near
          someone with it
        </li>
        <li>you have a weakened immune system and you&apos;ve been near someone with chickenpox</li>
        <li>you think your newborn baby has chickenpox</li>
      </ul>
      <p>
        In these situations, your GP can prescribe medicine to prevent complications. You need to
        take it within 24 hours of the spots coming out.
      </p>
    </CareCard.Content>
  </CareCard>
);
Urgent.args = { type: 'urgent' };

export const Immediate: Story<ComponentProps<typeof CareCard>> = (args) => (
  <CareCard {...args}>
    <CareCard.Heading>Call 999 if you have sudden chest pain that:</CareCard.Heading>
    <CareCard.Content>
      <ul>
        <li>spreads to your arms, back, neck or jaw</li>
        <li>makes your chest feel tight or heavy</li>
        <li>also started with shortness of breath, sweating and feeling or being sick</li>
      </ul>
      <p>
        You could be having a heart attack. Call 999 immediately as you need immediate treatment in
        hospital.
      </p>
    </CareCard.Content>
  </CareCard>
);
Immediate.args = { type: 'immediate' };

export const WithoutVisuallyHiddenText: Story<ComponentProps<typeof CareCard>> = (args) => (
  <CareCard {...args}>
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
);
WithoutVisuallyHiddenText.args = { type: 'non-urgent' };

export const WithCustomVisuallyHiddenText: Story<ComponentProps<typeof CareCard>> = (args) => (
  <CareCard {...args}>
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
);
WithCustomVisuallyHiddenText.args = { type: 'non-urgent' };

export default {
  title: 'Components/CareCard',
  component: CareCard,
  subcomponents: { 'CareCard.Content': CareCard.Content, 'CareCard.Heading': CareCard.Heading },
};
