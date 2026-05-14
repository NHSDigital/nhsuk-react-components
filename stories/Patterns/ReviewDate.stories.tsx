import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ReviewDate } from '#patterns/review-date/index.js';

const meta: Meta<typeof ReviewDate> = {
  title: 'Patterns/Review date',
  component: ReviewDate,
};

export default meta;
type Story = StoryObj<typeof ReviewDate>;

export const Default: Story = {
  name: 'Review date default',
  args: {
    lastReviewed: '12 Feburary 2016',
    nextReview: '1 Feburary 2019',
  },
};

export const JustLastReview: Story = {
  name: 'Review date with last review only',
  args: {
    lastReviewed: '12 Feburary 2016',
  },
};

export const JustNextReview: Story = {
  name: 'Review date with next review only',
  args: {
    nextReview: '1 Feburary 2019',
  },
};
