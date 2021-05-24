import React from 'react';
import { ReviewDate } from '../src';

export const Standard = (): JSX.Element => (
  <ReviewDate lastReviewed="12 Feburary 2016" nextReview="1 Feburary 2019" />
);

export const JustLastReview = (): JSX.Element => <ReviewDate lastReviewed="12 Feburary 2016" />;

export const JustNextReview = (): JSX.Element => <ReviewDate nextReview="1 Feburary 2019" />;

export default {
  title: 'Components/ReviewDate',
  component: ReviewDate,
};
