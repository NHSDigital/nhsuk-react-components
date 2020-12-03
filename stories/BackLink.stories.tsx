import React from 'react';
import { BackLink } from '../src';

export const StandardLink = () => <BackLink href="/">Link</BackLink>;

export const OpenInNewTabLink = () => (
  <BackLink target="_blank" rel="noopener noreferrer" href="/">
    Link
  </BackLink>
);

export default {
  title: 'Components/BackLink',
  component: BackLink,
};
