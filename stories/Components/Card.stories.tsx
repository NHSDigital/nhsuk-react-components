/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card } from '../../src';
import { Meta, StoryObj } from '@storybook/react';
import { ColWidth } from '../../src/util/types/NHSUKTypes';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Standard: Story = {
  render: () => (
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
  args: { feature: true },
  render: (args) => (
    <Card feature={args.feature}>
      <Card.Content>
        <Card.Heading>Feature card heading</Card.Heading>
        <Card.Description>Feature card description</Card.Description>
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
