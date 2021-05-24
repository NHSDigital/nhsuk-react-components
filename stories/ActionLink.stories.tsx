import React from 'react';
import { ActionLink } from '../src';

export const StandardLink = (): JSX.Element => <ActionLink href="/">Link</ActionLink>;

export const OpenInNewTabLink = (): JSX.Element => (
  <ActionLink target="_blank" rel="noopener noreferrer" href="/">
    Link
  </ActionLink>
);

export default {
  title: 'Components/ActionLink',
  component: ActionLink,
};
