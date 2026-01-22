/* eslint-disable jsx-a11y/anchor-is-valid */
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ChevronRightCircleIcon } from '#components/content-presentation/icons/individual/index.js';
import { SummaryList } from '#components/content-presentation/summary-list/index.js';
import { Card } from '#components/navigation/card/index.js';
import { BodyText } from '#components/typography/BodyText.js';

const meta: Meta<typeof Card> = {
  title: 'Navigation/Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;
type StoryGroup = StoryObj<typeof Card.GroupItem>;

export const Standard: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">If you need help now but it&apos;s not an emergency</Card.Heading>
        <Card.Description>
          Go to <a href="stories#">111.nhs.uk</a> or <a href="stories#">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const BasicWithHeadingLink: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their carers
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const BasicWithCustomHTML: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">Help from NHS 111</Card.Heading>
        <BodyText>
          If you&apos;re worried about a symptom and not sure what help you need, NHS 111 can tell
          you what to do next.
        </BodyText>
        <BodyText>
          Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.
        </BodyText>
        <BodyText>For a life-threatening emergency call 999.</BodyText>
      </Card.Content>
    </Card>
  ),
};

export const BasicWithSummaryList: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">Help from NHS 111</Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row noBorder>
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const BasicWithSummaryListAndHeadingLink: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#">Help from NHS 111</Card.Link>
        </Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row noBorder>
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const CardWithImage: Story = {
  args: {
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Image
        src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
        alt=""
      />
      <Card.Content>
        <Card.Heading size="m">
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
  args: {
    feature: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">Feature card heading</Card.Heading>
        <Card.Description>Feature card description</Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const FeatureCardWithList: Story = {
  args: {
    feature: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">Feature card heading</Card.Heading>
        <ul className="nhsuk-list nhsuk-list--border">
          <li>
            <a href="/conditions/abdominal-aortic-aneurysm/">AAA</a>
          </li>
          <li>
            <a href="/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a>
          </li>
          <li>
            <a href="/conditions/abscess/">Abscess</a>
          </li>
        </ul>
      </Card.Content>
    </Card>
  ),
};

export const PrimaryCardWithChevron: Story = {
  args: {
    primary: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#">Breast screening</Card.Link>
        </Card.Heading>
        <ChevronRightCircleIcon />
      </Card.Content>
    </Card>
  ),
};

export const PrimaryCardWithChevronAndDescription: Story = {
  args: {
    primary: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their carers
        </Card.Description>
        <ChevronRightCircleIcon />
      </Card.Content>
    </Card>
  ),
};

export const ClickableCard: Story = {
  args: {
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their carers
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const SecondaryCard: Story = {
  args: {
    secondary: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#">Urgent and emergency care services</Card.Link>
        </Card.Heading>
        <Card.Description>
          Services the NHS provides if you need urgent or emergency medical help
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const SecondaryNonClickableWithCustomHTML: Story = {
  args: {
    secondary: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading className="nhsuk-u-font-size-22 nhsuk-u-margin-bottom-2">
          <Card.Link href="#">Why we are reinvesting in the NHS Prototype kit</Card.Link>
        </Card.Heading>
        <BodyText size="s" className="nhsuk-u-margin-bottom-2">
          Services the NHS provides if you need urgent or emergency medical help
        </BodyText>
        <Card.Description>
          Frankie and Mike explain why we revived the NHS prototype kit, the benefits of prototyping
          in code and how digital teams in the NHS can get started using it.
        </Card.Description>
      </Card.Content>
    </Card>
  ),
};

export const CardGroup: StoryGroup = {
  args: { width: 'one-half' },
  argTypes: {
    width: {
      control: 'radio',
      options: ['one-half', 'one-third', 'one-quarter'],
    },
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem {...args}>
        <Card clickable>
          <Card.Content>
            <Card.Heading size="m">
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem {...args}>
        <Card clickable>
          <Card.Content>
            <Card.Heading size="m">
              <Card.Link href="#">Help from social services and charities</Card.Link>
            </Card.Heading>
            <Card.Description>
              Includes helplines, needs assessments, advocacy and reporting abuse
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem {...args}>
        <Card clickable>
          <Card.Content>
            <Card.Heading size="m">
              <Card.Link href="#">Money, work and benefits</Card.Link>
            </Card.Heading>
            <Card.Description>
              How to pay for care and support, and where you can get help with costs
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem {...args}>
        <Card clickable>
          <Card.Content>
            <Card.Heading size="m">
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
  args: {
    cardType: 'non-urgent',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Speak to a GP if:</Card.Heading>
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
  args: {
    cardType: 'urgent',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Ask for an urgent GP appointment if:</Card.Heading>
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
  args: {
    cardType: 'emergency',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Call 999 or go to A&E now if:</Card.Heading>
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
