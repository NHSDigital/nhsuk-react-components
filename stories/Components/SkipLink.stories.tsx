import React from 'react';
import { SkipLink, Hint } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const CodeText: React.FC = (props) => (
  <span
    style={{
      fontFamily: 'monospace',
      marginLeft: 5,
      marginRight: 5,
      fontSize: 14,
      padding: 3,
      backgroundColor: 'rgba(255, 0, 0, 0.15)',
      borderRadius: 5,
    }}
    {...props}
  />
);

const meta: Meta<typeof SkipLink> = {
  title: 'Components/SkipLink',
  component: SkipLink,
};
export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Standard: Story = {
  render: () => (
    <>
      <Hint>
        Press
        <CodeText>tab</CodeText>
        to show the SkipLink
      </Hint>
      <SkipLink />
    </>
  ),
};

export const SkipLinkWithDefaultBehaviourDisabled: Story = {
  render: () => (
    <>
      <Hint>
        Press
        <CodeText>tab</CodeText>
        to show the SkipLink
      </Hint>
      <SkipLink disableDefaultBehaviour />
    </>
  ),
};
