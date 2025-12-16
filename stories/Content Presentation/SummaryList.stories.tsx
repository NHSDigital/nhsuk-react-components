import { type Meta, type StoryObj } from '@storybook/react-vite';

import { SummaryList } from '#components/content-presentation/summary-list/index.js';
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
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="name">
            Change
          </SummaryList.Action>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="date of birth">
            Change
          </SummaryList.Action>
        </SummaryList.Actions>
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
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="contact information">
            Change
          </SummaryList.Action>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="contact details">
            Change
          </SummaryList.Action>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutActionsOnLastRow: Story = {
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="name">
            Change
          </SummaryList.Action>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="date of birth">
            Change
          </SummaryList.Action>
        </SummaryList.Actions>
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
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="contact information">
            Change
          </SummaryList.Action>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutActions: Story = {
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
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutBorderOnLastRow: Story = {
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
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutBorder: Story = {
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
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};
