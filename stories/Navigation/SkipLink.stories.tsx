import { type Meta, type StoryObj } from '@storybook/react';
import { type FC, type ReactNode } from 'react';
import { HintText, SkipLink } from '#components';

const CodeText: FC<{ children: ReactNode }> = ({ children }) => (
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

  render: (args) => (
    <>
      <HintText>
        Press
        <CodeText>tab</CodeText>
        to show the SkipLink
      </HintText>
      <SkipLink />
      <h1>Page heading</h1>
      <div id="maincontent">This is the main content</div>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Standard: Story = {};
