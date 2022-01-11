import { Story } from '@storybook/react';
import React from 'react';
import { Hint, SkipLink } from '../../src';

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

export const Standard: Story = (args) => (
  <>
    <Hint>
      Press
      <CodeText>tab</CodeText>
      to show the SkipLink
    </Hint>
    <SkipLink {...args} />
  </>
);

export const SkipLinkWithDefaultBehaviourDisabled: Story = (args) => (
  <>
    <Hint>
      Press
      <CodeText>tab</CodeText>
      to show the SkipLink
    </Hint>
    <SkipLink {...args} />
  </>
);
SkipLinkWithDefaultBehaviourDisabled.args = {
  disableDefaultBehaviour: true,
};

export default {
  title: 'Components/SkipLink',
  component: SkipLink,
};
