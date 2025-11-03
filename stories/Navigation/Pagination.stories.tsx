import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Pagination } from '#components/navigation/pagination/index.js';

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

export const Numbered: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Link href="/results?page=1" previous />
      <Pagination.Item href="/results?page=1" number={1} />
      <Pagination.Item href="/results?page=2" number={2} current />
      <Pagination.Item href="/results?page=3" number={3} />
      <Pagination.Link href="/results?page=3" next />
    </Pagination>
  ),
};

export const NumberedFirstPage: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Item href="/results?page=1" number={1} current />
      <Pagination.Item href="/results?page=2" number={2} />
      <Pagination.Item href="/results?page=3" number={3} />
      <Pagination.Link href="/results?page=2" next />
    </Pagination>
  ),
};

export const NumberedLastPage: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Link href="/results?page=2" previous />
      <Pagination.Item href="/results?page=1" number={1} />
      <Pagination.Item href="/results?page=2" number={2} />
      <Pagination.Item href="/results?page=3" number={3} current />
    </Pagination>
  ),
};

export const NumberedWithManyPages: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Link href="/results?page=9" previous />
      <Pagination.Item href="/results?page=1" number={1} />
      <Pagination.Item ellipsis />
      <Pagination.Item href="/results?page=8" number={8} />
      <Pagination.Item href="/results?page=9" number={9} />
      <Pagination.Item href="/results?page=10" number={10} current />
      <Pagination.Item href="/results?page=11" number={11} />
      <Pagination.Item href="/results?page=12" number={12} />
      <Pagination.Item ellipsis />
      <Pagination.Item href="/results?page=40" number={40} />
      <Pagination.Link href="/results?page=11" next />
    </Pagination>
  ),
};

export const NumberedWithTranslations: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Link href="/results?page=1" previous>
        Blaenorol
      </Pagination.Link>
      <Pagination.Item href="/results?page=1" number={1} />
      <Pagination.Item href="/results?page=2" number={2} current />
      <Pagination.Item href="/results?page=3" number={3} />
      <Pagination.Link href="/results?page=3" next>
        Nesaf
      </Pagination.Link>
    </Pagination>
  ),
};
