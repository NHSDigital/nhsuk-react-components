import React from 'react';
import { Pagination } from '../../src';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
};
export default meta;
type Story = StoryObj<typeof Pagination>;

Pagination.Link.displayName = 'Pagination.Link';

export const Standard: Story = {
  render: (args) => (
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
