import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Pagination } from '#components';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
};
export default meta;
type Story = StoryObj<typeof Pagination>;

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
