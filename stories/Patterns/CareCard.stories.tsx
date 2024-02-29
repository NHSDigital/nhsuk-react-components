import React from 'react';
import { CareCard } from '../../src';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * By default, CareCard components prepend hidden text before the title. These are:
 *
 * - ("non-urgent") Non-urgent advice:
 * - ("urgent") Urgent advice:
 * - ("immediate") Immediate action required:
 *
 * If you wish to disable this behaviour, pass the prop `visuallyHiddenText={false}` to the `CareCard.Heading` component or specify your own visually hidden text by using `visuallyHiddenText="Custom"`.
 *
 * You can change the heading type (i.e. `h1`, `h2` and so on) of the title by passing the prop `headingLevel="<headingLevel>"` to the `CareCard.Heading`.
 *
 * ## Usage
 *
 *
 * ### Standard
 *
 * ```jsx
 * import { CareCard } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <CareCard type="non-urgent">
 *             <CareCard.Heading>Speak to a GP if:</CareCard.Heading>
 *             <CareCard.Content>
 *                 <ul>
 *                     <li>you're not sure it's chickenpox</li>
 *                     <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
 *                     <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
 *                     <li>you're concerned about your child or they get worse</li>
 *                 </ul>
 *                 <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
 *             </CareCard.Content>
 *         </CareCard>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof CareCard> = {
  title: 'Components/CareCard',
  component: CareCard,
};
export default meta;

CareCard.Heading.displayName = 'CareCard.Heading';
CareCard.Content.displayName = 'CareCard.Content';

type Story = StoryObj<typeof CareCard>;
export const NonUrgent: Story = {
  args: { type: 'non-urgent' },
  render: (args): JSX.Element => (
    <CareCard type={args.type}>
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
  args: { type: 'urgent' },
  render: (args) => (
    <CareCard type={args.type}>
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
  args: { type: 'immediate' },
  render: (args) => (
    <CareCard type={args.type}>
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
  args: {
    type: 'non-urgent',
  },
  render: (args) => (
    <CareCard type={args.type}>
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
  args: {
    type: 'non-urgent',
  },
  render: (args) => (
    <CareCard type={args.type}>
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
