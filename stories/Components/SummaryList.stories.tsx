/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { SummaryList, BodyText } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SummaryList> = {
  title: 'Components/SummaryList',
  component: SummaryList,
};
export default meta;
type Story = StoryObj<typeof SummaryList>;

SummaryList.Row.displayName = 'SummaryList.Row';
SummaryList.Key.displayName = 'SummaryList.Key';
SummaryList.Value.displayName = 'SummaryList.Value';
SummaryList.Actions.displayName = 'SummaryList.Actions';

export const Standard: Story = {
  argTypes: {
    noBorder: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  args: { noBorder: false },
  render: ({ noBorder }) => (
    <SummaryList noBorder={noBorder}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
        <SummaryList.Actions>
          <a href="stories#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
        <SummaryList.Actions>
          <a href="stories#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryList.Value>
        <SummaryList.Actions>
          <a href="stories#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
        <SummaryList.Actions>
          <a href="stories#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const SummaryListWithoutActions: Story = {
  args: { noBorder: false },
  render: ({ noBorder }) => (
    <SummaryList noBorder={noBorder}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
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

export const SummaryListWithoutBorder: Story = {
  args: {
    noBorder: true,
  },
  render: ({ noBorder }) => (
    <SummaryList noBorder={noBorder}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
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
