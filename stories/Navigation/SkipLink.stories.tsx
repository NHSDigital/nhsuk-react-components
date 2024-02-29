import React from 'react';
import { SkipLink, HintText } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const CodeText: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => (
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
  >
    {children}
  </span>
);

const meta: Meta<typeof SkipLink> = {
  title: 'Navigation/SkipLink',
  component: SkipLink,
  argTypes: {
    focusTargetRef: { table: { disable: true } },
  },
  render: (args) => (
    <>
      <HintText>
        Press
        <CodeText>tab</CodeText>
        to show the SkipLink
      </HintText>
      <SkipLink disableDefaultBehaviour={args.disableDefaultBehaviour} />
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Standard: Story = {
  args: {
    disableDefaultBehaviour: false,
  },
  argTypes: {
    disableDefaultBehaviour: { table: { disable: true } },
  },
};

export const SkipLinkWithDefaultBehaviourDisabled: Story = {
  args: {
    disableDefaultBehaviour: true,
  },
};
