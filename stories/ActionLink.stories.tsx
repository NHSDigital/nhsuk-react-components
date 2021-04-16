import React from 'react';
import { ActionLink } from '../src';

export const StandardLink = () => <ActionLink href="/">Link</ActionLink>;

export const OpenInNewTabLink = () => (
  <ActionLink target="_blank" rel="noopener noreferrer" href="/">
    Link
  </ActionLink>
);

export default {
  title: 'Components/ActionLink',
  component: ActionLink,
};
