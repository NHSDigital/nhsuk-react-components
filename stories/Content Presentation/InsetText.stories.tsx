import React from 'react';
import { InsetText } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InsetText> = {
  title: 'Content Presentation/InsetText',
  component: InsetText,
  render: (args) => (
    <InsetText {...args}>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ),
};
export default meta;
type Story = StoryObj<typeof InsetText>;

export const Standard: Story = { argTypes: { visuallyHiddenText: { table: { disable: true } } } };
export const WithCustomHiddenText: Story = {
  args: {
    visuallyHiddenText: 'Hidden Text: ',
  },
};
export const WithDisabledHiddenText: Story = {
  args: {
    visuallyHiddenText: false,
  },
};
