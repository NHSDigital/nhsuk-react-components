import React from 'react';
import { ReviewDate } from '../src';

export const Standard = () => (
  <ReviewDate lastReviewed="12 Feburary 2016" nextReview="1 Feburary 2019" />
);

export const JustLastReview = () => <ReviewDate lastReviewed="12 Feburary 2016" />;

export const JustNextReview = () => <ReviewDate nextReview="1 Feburary 2019" />;

export default {
  title: 'Components/ReviewDate',
  component: ReviewDate,
};
