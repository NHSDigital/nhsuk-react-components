/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { ReviewDate } from '../src';

const stories = storiesOf('Review Date', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <ReviewDate lastReviewed="12 Feburary 2016" nextReview="1 Feburary 2019" />
  ))
  .add('Just Last Review', () => <ReviewDate lastReviewed="12 Feburary 2016" />)
  .add('Just next review', () => <ReviewDate nextReview="1 Feburary 2019" />);
