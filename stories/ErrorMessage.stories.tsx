import React from 'react';
import { ErrorMessage } from '../src';


export const Standard = () => <ErrorMessage>Error message about full name goes here</ErrorMessage>;

export const NoVisuallyHiddenText = () => (
  <ErrorMessage visuallyHiddenText={false}>Error message about full name goes here</ErrorMessage>
);

export const CustomVisuallyHiddenText = () => (
  <ErrorMessage visuallyHiddenText="Custom Text">
    Error message about full name goes here
  </ErrorMessage>
);

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
};
