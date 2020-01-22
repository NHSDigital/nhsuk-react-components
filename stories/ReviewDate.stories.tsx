/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReviewDate } from '../src';

const stories = storiesOf('Review Date', module);

stories
  .add('Standard', () => (
    <ReviewDate lastReviewed="12 Feburary 2016" nextReview="1 Feburary 2019" />
  ))
  .add('Just Last Review', () => <ReviewDate lastReviewed="12 Feburary 2016" />)
  .add('Just next review', () => <ReviewDate nextReviewed="1 Feburary 2019" />);
