import React from 'react';
import { ErrorMessage } from '../../src';

export const Standard = (): JSX.Element => (
  <ErrorMessage>Error message about full name goes here</ErrorMessage>
);

export const NoVisuallyHiddenText = (): JSX.Element => (
  <ErrorMessage visuallyHiddenText={false}>Error message about full name goes here</ErrorMessage>
);

export const CustomVisuallyHiddenText = (): JSX.Element => (
  <ErrorMessage visuallyHiddenText="Custom Text">
    Error message about full name goes here
  </ErrorMessage>
);

export default {
  title: 'Typography/ErrorMessage',
  component: ErrorMessage,
};
