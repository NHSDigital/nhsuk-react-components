import React from 'react';
import { Button } from '../src';

export const Primary = (): JSX.Element => <Button>Primary</Button>;

export const Secondary = (): JSX.Element => <Button secondary>Secondary</Button>;

export const Reverse = (): JSX.Element => <Button reverse>Reverse</Button>;

export const Disabled = (): JSX.Element => <Button disabled>Disabled</Button>;

export const LinkButton = (): JSX.Element => <Button href="/">As a Link</Button>;

export const ForceButton = (): JSX.Element => <Button as="button">As a Button</Button>;
ForceButton.storyName = 'Button Element Forced';

export const ForceAnchor = (): JSX.Element => <Button as="a">As an Anchor</Button>;
ForceAnchor.storyName = 'Anchor Element Forced';

export default {
  title: 'Components/Button',
  component: Button,
};
