/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Pagination } from '../src';

const stories = storiesOf('Pagination', module);

stories.addDecorator(centered).add('Standard', () => (
  <div style={{ minWidth: 400 }}>
    <Pagination>
      <Pagination.Link previous href="/section/treatments">
        Treatments
      </Pagination.Link>
      <Pagination.Link next href="/section/symptoms">
        Symptoms
      </Pagination.Link>
    </Pagination>
  </div>
));
