/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { SummaryList, BodyText } from '../../src';
import { Meta, StoryObj } from '@storybook/react';


/**
 * ## Implementation notes
 *
 * When providing action links, you must include visually hidden text. This means a screen reader user will hear a meaningful action, like "Change name" or "Change date of birth".'
 * 
 * Example of an action link:
 * 
 * ```jsx
 *  <a href="#">
 *   Change
 *   <span class="nhsuk-u-visually-hidden">
 *     {' '}name
 *   </span>
 * </a>
 * ```
 */


const meta: Meta<typeof SummaryList> = {
  title: 'Content Presentation/SummaryList',
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
          <a href="#">
            Change<span class="nhsuk-u-visually-hidden"> name</span>
          </a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">
            Change<span class="nhsuk-u-visually-hidden"> date of birth</span>
          </a>
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
          <a href="#">
            Change<span class="nhsuk-u-visually-hidden"> contact information</span>
          </a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">
            Change<span class="nhsuk-u-visually-hidden"> contact details</span>
          </a>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Change links must include visually hidden text. This means a screen reader user will hear a meaningful action, like "Change name" or "Change date of birth".'
      }
    }
  }
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
