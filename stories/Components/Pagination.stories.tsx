import React from 'react';
import { Pagination } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Standard: Story = {
  render: () => (
    <Pagination>
      <Pagination.Link previous href="/section/treatments">
        Treatments
      </Pagination.Link>
      <Pagination.Link next href="/section/symptoms">
        Symptoms
      </Pagination.Link>
    </Pagination>
  ),
};
