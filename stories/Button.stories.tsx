import React from 'react';
import { Button } from '../src';

export const Primary = () => <Button>Primary</Button>;

export const Secondary = () => <Button secondary>Secondary</Button>;

export const Reverse = () => <Button reverse>Reverse</Button>;

export const Disabled = () => <Button disabled>Disabled</Button>;

export const LinkButton = () => <Button href="/">As a Link</Button>;

export const ForceButton = () => <Button as="button">As a Button</Button>;
ForceButton.storyName = 'Button Element Forced';

export const ForceAnchor = () => <Button as="a">As an Anchor</Button>;
ForceAnchor.storyName = 'Anchor Element Forced';


export default {
  title: 'Components/Button',
  component: Button,
};
