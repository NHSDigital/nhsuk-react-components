import React from 'react';
import { Label } from '../src';

export const Standard = () => (
  <Label>National Insurance Number</Label>
);

export const BoldLabel = () => (
  <Label bold>National Insurance Number</Label>
);

export const PageHeadingLabel = () => (
  <Label isPageHeading>National Insurance Number</Label>
);

export const CustomSizeLabel = () => (
  <Label size="m">National Insurance Number</Label>
);

export default {
  title: 'Components/Label',
  component: Label,
};
