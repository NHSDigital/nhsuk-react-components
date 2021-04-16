import React from 'react';
import { SkipLink, Hint } from '../src';

const CodeText: React.FC = props => (
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

export const Standard = () => (
  <>
    <Hint>
      Press
      <CodeText>tab</CodeText>
      to show the SkipLink
    </Hint>
    <SkipLink />
  </>
);

export const SkipLinkWithDefaultBehaviourDisabled = () => (
  <>
    <Hint>
      Press
      <CodeText>tab</CodeText>
      to show the SkipLink
    </Hint>
    <SkipLink disableDefaultBehaviour />
  </>
);


export default {
  title: 'Components/SkipLink',
  component: SkipLink,
};
