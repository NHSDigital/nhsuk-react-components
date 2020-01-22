/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorSummary } from '../src';

const stories = storiesOf('Error Summary', module);

stories.add('Standard', () => (
  <ErrorSummary aria-labelledby="error-summary-title" role="alert" tabIndex={-1}>
    <ErrorSummary.Title id="error-summary-title">There is a problem</ErrorSummary.Title>
    <ErrorSummary.Body>
      <p>Optional description of the errors and how to correct them</p>
      <ErrorSummary.List>
        <ErrorSummary.Item href="#example-error-1">
          Link to error with explanation
        </ErrorSummary.Item>
        <ErrorSummary.Item href="#example-error-2">
          Link to error with explanation
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary.Body>
  </ErrorSummary>
));
