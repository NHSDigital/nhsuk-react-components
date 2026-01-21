import { type Meta, type StoryObj } from '@storybook/react-vite';

import { SummaryList } from '#components/content-presentation/summary-list/index.js';
import { Tag } from '#components/content-presentation/tag/index.js';
import { Button } from '#components/form-elements/button/index.js';
import { ActionLink } from '#components/navigation/action-link/index.js';
import { Card } from '#components/navigation/card/index.js';
import { BodyText, Heading } from '#components/typography/index.js';

const meta: Meta<typeof Card> = {
  title: 'Navigation/Card',
  component: Card,
  argTypes: {
    cardType: {
      control: {
        type: 'select',
        labels: {
          'undefined': 'Not set',
          'non-urgent': 'Non-urgent',
          'urgent': 'Urgent',
          'emergency': 'Emergency',
        },
      },
      options: [undefined, 'non-urgent', 'urgent', 'emergency'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;
type StoryGroup = StoryObj<typeof Card.GroupItem>;

export const Standard: Story = {
  name: 'Basic card default',
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">If you need help now but it&apos;s not an emergency</Card.Heading>
      <Card.Description>
        Go to <a href="#/stories">111.nhs.uk</a> or <a href="#/stories">call 111</a>
      </Card.Description>
    </Card>
  ),
};

export const WithCustomHTML: Story = {
  name: 'Basic card with custom HTML',
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Help from NHS 111</Card.Heading>
      <BodyText>
        If you&apos;re worried about a symptom and not sure what help you need, NHS 111 can tell you
        what to do next.
      </BodyText>
      <BodyText>
        Go to <a href="#/111">111.nhs.uk</a> or <a href="#/111">call 111</a>.
      </BodyText>
      <BodyText>For a life-threatening emergency call 999.</BodyText>
    </Card>
  ),
};

export const WithHeadingLink: Story = {
  name: 'Basic card with heading link',
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">
        <Card.Link href="#">Introduction to care and support</Card.Link>
      </Card.Heading>
      <Card.Description>
        A quick guide for people who have care and support needs and their carers
      </Card.Description>
    </Card>
  ),
};

export const WithoutHeading: Story = {
  name: 'Basic card without heading',
  render: (args) => (
    <Card {...args}>
      <Card.Description>
        A quick guide for people who have care and support needs and their carers
      </Card.Description>
    </Card>
  ),
};

export const WithSummaryList: Story = {
  name: 'Basic card with summary list',
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Regional Manager</Card.Heading>
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
    </Card>
  ),
};

export const WithSummaryListAndActions: Story = {
  name: 'Basic card with summary list and actions',
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Regional Manager</Card.Heading>
      <Card.Action href="#/delete">Delete</Card.Action>
      <Card.Action href="#/withdraw">Withdraw</Card.Action>
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
    </Card>
  ),
};

export const WithSummaryListAndButton: Story = {
  name: 'Basic card with summary list and button',
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Regional Manager</Card.Heading>
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
      <Button href="#" secondary>
        Add role
      </Button>
    </Card>
  ),
};

export const WithSummaryListAndHeadingLink: Story = {
  name: 'Basic card with summary list and heading link',
  render: (args) => (
    <Card {...args}>
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
    </Card>
  ),
};

export const WithSummaryLists: Story = {
  name: 'Basic card with summary lists',
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Regional Manager</Card.Heading>
      <SummaryList>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Karen Francis</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>15 March 1984</SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
      <SummaryList>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Sarah Philips</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row noBorder>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>5 January 1978</SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
    </Card>
  ),
};

export const ClickableCard: Story = {
  name: 'Clickable card',
  args: {
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">
        <Card.Link href="#">Introduction to care and support</Card.Link>
      </Card.Heading>
      <Card.Description>
        A quick guide for people who have care and support needs and their carers
      </Card.Description>
    </Card>
  ),
};

export const NonUrgentCard: Story = {
  name: 'Non-urgent card',
  args: {
    cardType: 'non-urgent',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Speak to a GP if:</Card.Heading>
      <ul>
        <li>you&apos;re not sure it&apos;s chickenpox</li>
        <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
        <li>
          your child is <a href="#/dehydrated">dehydrated</a>
        </li>
        <li>you&apos;re concerned about your child or they get worse</li>
      </ul>
      <p>
        Tell the receptionist you think it&apos;s chickenpox before going in. They may recommend a
        special appointment time if other patients are at risk.
      </p>
    </Card>
  ),
};

export const UrgentCard: Story = {
  name: 'Urgent card',
  args: {
    cardType: 'urgent',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Ask for an urgent GP appointment if:</Card.Heading>
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
    </Card>
  ),
};

export const EmergencyCard: Story = {
  name: 'Emergency card',
  args: {
    cardType: 'emergency',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Call 999 if you have sudden chest pain that:</Card.Heading>
      <ul>
        <li>spreads to your arms, back, neck or jaw</li>
        <li>makes your chest feel tight or heavy</li>
        <li>also started with shortness of breath, sweating and feeling or being sick</li>
      </ul>
      <p>
        You could be having a heart attack. Call 999 immediately as you need immediate treatment in
        hospital.
      </p>
    </Card>
  ),
};

export const EmergencyCardWithActionLink: Story = {
  name: 'Emergency card with action link',
  args: {
    cardType: 'emergency',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Call 999 or go to A&E now if:</Card.Heading>
      <ul>
        <li>
          you&apos;re coughing up more than just a few spots or streaks of blood – this could be a
          sign of serious bleeding in your lungs
        </li>
        <li>
          you have severe difficulty breathing – you&apos;re gasping, choking or not able to get
          words out
        </li>
      </ul>
      <ActionLink href="#" reverse>
        Find your nearest A&E
      </ActionLink>
    </Card>
  ),
};

export const CardWithImage: Story = {
  name: 'Basic card with image',
  args: {
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Image
        src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
        alt=""
      />
      <Card.Heading size="m">
        <Card.Link href="#">Exercise</Card.Link>
      </Card.Heading>
      <Card.Description>
        Programmes, workouts and tips to get you moving and improve your fitness and wellbeing
      </Card.Description>
    </Card>
  ),
};

export const CardWithImageAndCustomHTML: Story = {
  name: 'Basic card with image and custom HTML',
  args: {
    clickable: true,
  },
  parameters: {
    width: 'one-half',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Image
        src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
        alt=""
      />
      <Card.Heading size="m">
        <Card.Link href="https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit">
          Why we are reinvesting in the NHS prototype kit
        </Card.Link>
      </Card.Heading>
      <BodyText className="nhsuk-body-s nhsuk-u-secondary-text-colour nhsuk-u-margin-bottom-0">
        <span className="nhsuk-u-visually-hidden">Published on: </span>21 July 2025
      </BodyText>
      <BodyText className="nhsuk-body-s nhsuk-u-font-weight-bold">
        NHS England Design Matters blog
      </BodyText>
      <Card.Description>
        Frankie Roberto and Mike Gallagher explain why we revived the NHS prototype kit, the
        benefits of prototyping in code and how digital teams in the NHS can get started using it.
      </Card.Description>
    </Card>
  ),
};

export const TopTask: Story = {
  name: 'Top task',
  args: {
    clickable: true,
  },
  parameters: {
    width: 'one-third',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading headingLevel="h5" size="xs">
        <Card.Link href="#">Order a repeat prescription</Card.Link>
      </Card.Heading>
    </Card>
  ),
};

export const FeatureCard: Story = {
  name: 'Feature card',
  args: {
    feature: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Feature card heading</Card.Heading>
      <Card.Description>Feature card description</Card.Description>
    </Card>
  ),
};

export const FeatureCardWithNestedCardAndSummaryList: Story = {
  name: 'Feature card with nested card and summary list',
  args: {
    feature: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">Flu: Follow-up requested</Card.Heading>
      <BodyText>
        Sarah Philips (Mum) would like to speak to a member of the team about other options for
        their child&apos;s vaccination.
      </BodyText>
      <Button href="#" secondary>
        Record a new consent response
      </Button>
      <Heading headingLevel="h3" size="s">
        Consent responses
      </Heading>
      <Card clickable>
        <Card.Heading headingLevel="h4">
          <Card.Link href="#">Sarah Philips (Mum)</Card.Link>
        </Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Sarah Philips</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Date</SummaryList.Key>
            <SummaryList.Value>25 August 2025 at 4:04 pm</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row noBorder>
            <SummaryList.Key>Response</SummaryList.Key>
            <SummaryList.Value>
              <Tag modifier="orange">Follow up requested</Tag>
            </SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card>
    </Card>
  ),
};

export const FeatureCardWithAZContent: Story = {
  name: 'Feature card with A to Z content',
  args: {
    feature: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading id="A" size="m">
        A
      </Card.Heading>
      <ul className="nhsuk-list nhsuk-list--border">
        <li>
          <a href="/conditions/abdominal-aortic-aneurysm/">AAA, see Abdominal aortic aneurysm</a>
        </li>
        <li>
          <a href="/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a>
        </li>
        <li>
          <a href="/conditions/abscess/">Abscess</a>
        </li>
      </ul>
    </Card>
  ),
};

export const PrimaryCardWithChevron: Story = {
  name: 'Primary card (with chevron)',
  args: {
    primary: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">
        <Card.Link href="#">Breast screening</Card.Link>
      </Card.Heading>
    </Card>
  ),
};

export const PrimaryCardWithChevronAndDescription: Story = {
  name: 'Primary card (with chevron and description)',
  args: {
    primary: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">
        <Card.Link href="#">Introduction to care and support</Card.Link>
      </Card.Heading>
      <Card.Description>
        A quick guide for people who have care and support needs and their carers
      </Card.Description>
    </Card>
  ),
};

export const SecondaryCard: Story = {
  name: 'Secondary card',
  args: {
    secondary: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading size="m">
        <Card.Link href="#">Urgent and emergency care services</Card.Link>
      </Card.Heading>
      <Card.Description>
        Services the NHS provides if you need urgent or emergency medical help
      </Card.Description>
    </Card>
  ),
};

export const SecondaryNonClickableWithCustomHTML: Story = {
  name: 'Secondary non-clickable card with custom HTML',
  args: {
    secondary: true,
  },
  render: (args) => (
    <Card {...args}>
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
    </Card>
  ),
};

export const CardGroup: StoryGroup = {
  name: 'Basic card group',
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
          <Card.Heading size="m">
            <Card.Link href="#">Introduction to care and support</Card.Link>
          </Card.Heading>
          <Card.Description>
            A quick guide for people who have care and support needs and their carers
          </Card.Description>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem {...args}>
        <Card clickable>
          <Card.Heading size="m">
            <Card.Link href="#">Help from social services and charities</Card.Link>
          </Card.Heading>
          <Card.Description>
            Includes helplines, needs assessments, advocacy and reporting abuse
          </Card.Description>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem {...args}>
        <Card clickable>
          <Card.Heading size="m">
            <Card.Link href="#">Money, work and benefits</Card.Link>
          </Card.Heading>
          <Card.Description>
            How to pay for care and support, and where you can get help with costs
          </Card.Description>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem {...args}>
        <Card clickable>
          <Card.Heading size="m">
            <Card.Link href="#">Care after a hospital stay</Card.Link>
          </Card.Heading>
          <Card.Description>
            Includes hospital discharge and care and support afterwards
          </Card.Description>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};
