import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ReviewDate } from '#patterns/review-date/index.js';

const meta: Meta<typeof ReviewDate> = {
  title: 'Patterns/ReviewDate',
  component: ReviewDate,
};
export default meta;
type Story = StoryObj<typeof ReviewDate>;

export const Standard: Story = {
  args: {
    lastReviewed: '12 Feburary 2016',
    nextReview: '1 Feburary 2019',
  },
};

export const JustLastReview: Story = {
  args: {
    lastReviewed: '12 Feburary 2016',
  },
};

export const JustNextReview: Story = {
  args: {
    nextReview: '1 Feburary 2019',
  },
};
