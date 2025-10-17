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
    <Pagination {...args}>
      <Pagination.Item href="/section/treatments" labelText="Treatments" previous />
      <Pagination.Item href="/section/symptoms" labelText="Symptoms" next />
    </Pagination>
  ),
};

export const WithOnlyNext: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Item href="/section/treatments" labelText="Symptoms" next />
    </Pagination>
  ),
};

export const WithOnlyPrevious: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Item href="/section/treatments" labelText="Treatments" previous />
    </Pagination>
  ),
};

export const WithTranslations: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Item href="/section/treatments" labelText="Driniaethau" previous>
        Blaenorol
      </Pagination.Item>
      <Pagination.Item href="/section/treatments" labelText="Symptomau" next>
        Nesaf
      </Pagination.Item>
    </Pagination>
  ),
};
