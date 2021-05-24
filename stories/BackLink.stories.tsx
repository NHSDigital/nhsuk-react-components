import React from 'react';
import { BackLink } from '../src';

export const StandardLink = (): JSX.Element => <BackLink href="/">Link</BackLink>;

export const OpenInNewTabLink = (): JSX.Element => (
  <BackLink target="_blank" rel="noopener noreferrer" href="/">
    Link
  </BackLink>
);

export default {
  title: 'Components/BackLink',
  component: BackLink,
};
