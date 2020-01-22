/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '../src';

const stories = storiesOf('Pagination', module);

stories.add('Standard', () => (
  <Pagination>
    <Pagination.Link previous href="/section/treatments">
      Treatments
    </Pagination.Link>
    <Pagination.Link next href="/section/symptoms">
      Symptoms
    </Pagination.Link>
  </Pagination>
));
