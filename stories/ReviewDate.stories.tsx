import { ReviewDate } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReviewDate> = {
  title: 'Components/ReviewDate',
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
