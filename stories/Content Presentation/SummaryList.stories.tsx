import { type Meta, type StoryObj } from '@storybook/react-vite';

import { SummaryList } from '#components/content-presentation/summary-list/index.js';
import { Card } from '#components/navigation/card/index.js';
import { BodyText } from '#components/typography/BodyText.js';

const meta: Meta<typeof SummaryList> = {
  title: 'Content Presentation/SummaryList',
  component: SummaryList,
  argTypes: {
    noBorder: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};
export default meta;
type Story = StoryObj<typeof SummaryList>;

export const Standard: Story = {
  name: 'Summary list default',
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="name">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="date of birth">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="contact information">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900362</BodyText>
          <BodyText>karen.francis@example.com</BodyText>
        </SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="contact details">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const WithMultipleActions: Story = {
  name: 'Summary list with multiple actions',
  parameters: {
    width: 'full',
  },
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="name">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="date of birth">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="contact information">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900362</BodyText>
          <BodyText>karen.francis@example.com</BodyText>
        </SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="contact details">
          Add
        </SummaryList.Action>
        <SummaryList.Action href="#" visuallyHiddenText="contact details">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Medicines</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>Isotretinoin capsules (Roaccutane)</BodyText>
          <BodyText>Isotretinoin gel (Isotrex)</BodyText>
          <BodyText>Pepto-Bismol (bismuth subsalicylate)</BodyText>
        </SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="medicines">
          Add
        </SummaryList.Action>
        <SummaryList.Action href="#" visuallyHiddenText="medicines">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutActions: Story = {
  name: 'Summary list without actions',
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900362</BodyText>
          <BodyText>karen.francis@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutRowActions: Story = {
  name: 'Summary list without row actions',
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="name">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="date of birth">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
        <SummaryList.Action href="#" visuallyHiddenText="contact information">
          Change
        </SummaryList.Action>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900362</BodyText>
          <BodyText>karen.francis@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutBorder: Story = {
  name: 'Summary list without border',
  args: {
    noBorder: true,
  },
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900362</BodyText>
          <BodyText>karen.francis@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutRowBorder: Story = {
  name: 'Summary list without row border',
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noBorder>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900362</BodyText>
          <BodyText>karen.francis@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListAsACard: Story = {
  name: 'Summary list as a card',
  render: (args) => (
    <Card>
      <Card.Heading size="m">Regional Manager</Card.Heading>
      <SummaryList {...args}>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Karen Francis</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>15 March 1984</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row noBorder>
          <SummaryList.Key>Contact information</SummaryList.Key>
          <SummaryList.Value>
            73 Roman Rd
            <br />
            Leeds
            <br />
            LS2 5ZN
          </SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
    </Card>
  ),
};

export const SummaryListAsACardWithActions: Story = {
  name: 'Summary list as a card with actions',
  render: (args) => (
    <Card>
      <Card.Heading size="m">Regional Manager</Card.Heading>
      <Card.Action href="#/delete">Delete</Card.Action>
      <Card.Action href="#/withdraw">Withdraw</Card.Action>
      <SummaryList {...args}>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Karen Francis</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>15 March 1984</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row noBorder>
          <SummaryList.Key>Contact information</SummaryList.Key>
          <SummaryList.Value>
            73 Roman Rd
            <br />
            Leeds
            <br />
            LS2 5ZN
          </SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
    </Card>
  ),
};

export const SummaryListAsACardClickableWithoutActions: Story = {
  name: 'Summary list as a card (clickable) without actions',
  render: (args) => (
    <Card clickable>
      <Card.Heading size="m">
        <Card.Link href="#">Regional Manager</Card.Link>
      </Card.Heading>
      <SummaryList {...args}>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Karen Francis</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>15 March 1984</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row noBorder>
          <SummaryList.Key>Contact information</SummaryList.Key>
          <SummaryList.Value>
            73 Roman Rd
            <br />
            Leeds
            <br />
            LS2 5ZN
          </SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
    </Card>
  ),
};

export const SummaryListAsACardFeatureWithActions: Story = {
  name: 'Summary list as a card (feature) with actions',
  render: (args) => (
    <Card feature>
      <Card.Heading size="m">Regional Manager</Card.Heading>
      <Card.Action href="#/delete">Delete</Card.Action>
      <Card.Action href="#/withdraw">Withdraw</Card.Action>
      <SummaryList {...args}>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Karen Francis</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>15 March 1984</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row noBorder>
          <SummaryList.Key>Contact information</SummaryList.Key>
          <SummaryList.Value>
            73 Roman Rd
            <br />
            Leeds
            <br />
            LS2 5ZN
          </SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
    </Card>
  ),
};

export const SummaryListAsACardSecondaryWithActions: Story = {
  name: 'Summary list as a card (secondary) with actions',
  render: (args) => (
    <Card secondary>
      <Card.Heading size="m">Regional Manager</Card.Heading>
      <Card.Action href="#/delete">Delete</Card.Action>
      <Card.Action href="#/withdraw">Withdraw</Card.Action>
      <SummaryList {...args}>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Karen Francis</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>15 March 1984</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row noBorder>
          <SummaryList.Key>Contact information</SummaryList.Key>
          <SummaryList.Value>
            73 Roman Rd
            <br />
            Leeds
            <br />
            LS2 5ZN
          </SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
    </Card>
  ),
};

export const SummaryListAsACardWithMultipleActions: Story = {
  name: 'Summary list as a card with multiple actions',
  parameters: {
    width: 'full',
  },
  render: (args) => (
    <Card>
      <Card.Heading size="m">Regional Manager</Card.Heading>
      <Card.Action href="#/delete">Delete</Card.Action>
      <Card.Action href="#/withdraw">Withdraw</Card.Action>
      <SummaryList {...args}>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Karen Francis</SummaryList.Value>
          <SummaryList.Action href="#" visuallyHiddenText="name">
            Change
          </SummaryList.Action>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>15 March 1984</SummaryList.Value>
          <SummaryList.Action href="#" visuallyHiddenText="date of birth">
            Change
          </SummaryList.Action>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Contact information</SummaryList.Key>
          <SummaryList.Value>
            73 Roman Rd
            <br />
            Leeds
            <br />
            LS2 5ZN
          </SummaryList.Value>
          <SummaryList.Action href="#" visuallyHiddenText="contact information">
            Change
          </SummaryList.Action>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Contact details</SummaryList.Key>
          <SummaryList.Value>
            <BodyText>07700 900362</BodyText>
            <BodyText>karen.francis@example.com</BodyText>
          </SummaryList.Value>
          <SummaryList.Action href="#" visuallyHiddenText="contact details">
            Add
          </SummaryList.Action>
          <SummaryList.Action href="#" visuallyHiddenText="contact details">
            Change
          </SummaryList.Action>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Medicines</SummaryList.Key>
          <SummaryList.Value>
            <BodyText>Isotretinoin capsules (Roaccutane)</BodyText>
            <BodyText>Isotretinoin gel (Isotrex)</BodyText>
            <BodyText>Pepto-Bismol (bismuth subsalicylate)</BodyText>
          </SummaryList.Value>
          <SummaryList.Action href="#" visuallyHiddenText="medicines">
            Add
          </SummaryList.Action>
          <SummaryList.Action href="#" visuallyHiddenText="medicines">
            Change
          </SummaryList.Action>
        </SummaryList.Row>
      </SummaryList>
    </Card>
  ),
};
