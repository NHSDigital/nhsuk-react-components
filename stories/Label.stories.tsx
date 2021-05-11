import React from 'react';
import { Label } from '../src';

export const Standard = (): JSX.Element => <Label>National Insurance Number</Label>;

export const BoldLabel = (): JSX.Element => <Label bold>National Insurance Number</Label>;

export const PageHeadingLabel = (): JSX.Element => (
  <Label isPageHeading>National Insurance Number</Label>
);

export const CustomSizeLabel = (): JSX.Element => <Label size="m">National Insurance Number</Label>;

export default {
  title: 'Components/Label',
  component: Label,
};
