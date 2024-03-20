/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card } from '../../src';
import { Meta, StoryObj } from '@storybook/react';
import { ColWidth } from '../../src/util/types/NHSUKTypes';
import { ChevronRightCircle } from '@components/icons';

const meta: Meta<typeof Card> = {
  title: 'Navigation/Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

Card.Content.displayName = 'Card.Content';
Card.Heading.displayName = 'Card.Heading';
Card.Description.displayName = 'Card.Description';
Card.Link.displayName = 'Card.Link';
Card.Image.displayName = 'Card.Image';
Card.Group.displayName = 'Card.Group';
Card.GroupItem.displayName = 'Card.GroupItem';

export const Standard: Story = {
  render: (args) => (
    <Card>
      <Card.Content>
        <Card.Heading>If you need help now but it&apos;s not an emergency</Card.Heading>
        <Card.Description>
          Go to <a href="stories#">111.nhs.uk</a> or <a href="stories#">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const ClickableCard: Story = {
  args: { clickable: true },
  render: (args) => (
    <Card clickable={args.clickable}>
      <Card.Content>
        <Card.Heading className="nhsuk-heading-m">
          <Card.Link href="#">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their carers
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const CardWithImage: Story = {
  args: { clickable: true },
  render: (args) => (
    <Card clickable={args.clickable}>
      <Card.Image
        src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
        alt=""
      />
      <Card.Content>
        <Card.Heading className="nhsuk-heading-m">
          <Card.Link href="#">Exercise</Card.Link>
        </Card.Heading>
        <Card.Description>
          Programmes, workouts and tips to get you moving and improve your fitness and wellbeing
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const FeatureCard: Story = {
  render: () => (
    <Card cardType="feature">
      <Card.Content>
        <Card.Heading>Feature card heading</Card.Heading>
        <Card.Description>Feature card description</Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const PrimaryCardWithChevron: Story = {
  render: () => (
    <Card clickable cardType="primary">
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#">Primary card heading</Card.Link>
        </Card.Heading>
        <Card.Description>Primary card description</Card.Description>
        <ChevronRightCircle />
      </Card.Content>
    </Card>
  ),
};

export const SecondaryCard: Story = {
  render: () => (
    <Card clickable cardType="secondary">
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#">Secondary card heading</Card.Link>
        </Card.Heading>
        <Card.Description>Secondary card description</Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const CardGroup: Story = {
  args: { width: 'one-half' },
  argTypes: {
    width: {
      control: 'radio',
      options: ['one-half', 'one-third', 'one-quarter'],
    },
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width={args.width as ColWidth}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width={args.width as ColWidth}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Help from social services and charities</Card.Link>
            </Card.Heading>
            <Card.Description>
              Includes helplines, needs assessments, advocacy and reporting abuse
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width={args.width as ColWidth}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Money, work and benefits</Card.Link>
            </Card.Heading>
            <Card.Description>
              How to pay for care and support, and where you can get help with costs
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width={args.width as ColWidth}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Care after a hospital stay</Card.Link>
            </Card.Heading>
            <Card.Description>
              Includes hospital discharge and care and support afterwards
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const NonUrgentCareCard: Story = {
  args: { cardType: 'non-urgent' },
  render: (args) => (
    <Card cardType={args.cardType}>
      <Card.Heading>Speak to a GP if:</Card.Heading>
      <Card.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it&apos;s chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </Card.Content>
    </Card>
  ),
};

export const UrgentCareCard: Story = {
  args: { cardType: 'urgent' },
  render: (args) => (
    <Card cardType={args.cardType}>
      <Card.Heading>Ask for an urgent GP appointment if:</Card.Heading>
      <Card.Content>
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
      </Card.Content>
    </Card>
  ),
};

export const EmergencyCareCard: Story = {
  args: { cardType: 'emergency' },
  render: (args) => (
    <Card cardType={args.cardType}>
      <Card.Heading>Call 999 or go to A&E now if:</Card.Heading>
      <Card.Content>
        <ul>
          <li>you or someone you know needs immediate help</li>
          <li>you have seriously harmed yourself - for example, by taking a drug overdose</li>
        </ul>
        <p>A mental health emergency should be taken as seriously as a medical emergency.</p>
        <p>
          <a href="">Find your nearest A&E</a>
        </p>
      </Card.Content>
    </Card>
  ),
};

/**
 * By default, CareCard components prepend hidden text before the title. These are:
 *
 * - ("non-urgent") Non-urgent advice:
 * - ("urgent") Urgent advice:
 * - ("immediate") Immediate action required:
 *
 * If you wish to disable this behaviour, pass the prop `visuallyHiddenText={false}` to the `CareCard.Heading` component or specify your own visually hidden text by using `visuallyHiddenText="Custom"`.
 *
 * You can change the heading type (i.e. `h1`, `h2` and so on) of the title by passing the prop `headingLevel="<headingLevel>"` to the `CareCard.Heading`.
 */
export const WithCustomVisuallyHiddenText: Story = {
  args: { cardType: 'non-urgent' },
  render: (args) => (
    <Card cardType={args.cardType}>
      <Card.Heading visuallyHiddenText="Custom visually hidden text">
        Speak to a GP if:
      </Card.Heading>
      <Card.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it&apos;s chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </Card.Content>
    </Card>
  ),
};
