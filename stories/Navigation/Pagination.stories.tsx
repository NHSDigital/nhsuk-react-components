import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Pagination } from '#components/navigation/pagination/index.js';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the pagination component and when to use it, visit the [design system
          in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/pagination) for guidance,
          examples and options.
        </Markdown>
      ),
    },
    width: 'full',
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  name: 'Pagination default',
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Item href="/section/treatments" labelText="Treatments" previous />
      <Pagination.Item href="/section/symptoms" labelText="Symptoms" next />
    </Pagination>
  ),
};

export const WithOnlyNext: Story = {
  name: 'Pagination with only next',
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Item href="/section/treatments" labelText="Symptoms" next />
    </Pagination>
  ),
};

export const WithOnlyPrevious: Story = {
  name: 'Pagination with only previous',
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Item href="/section/treatments" labelText="Treatments" previous />
    </Pagination>
  ),
};

export const WithTranslations: Story = {
  name: 'Pagination with translations',
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
  name: 'Pagination numbered',
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
  name: 'Pagination numbered first page',
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
  name: 'Pagination numbered last page',
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
  name: 'Pagination numbered with many pages',
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
  name: 'Pagination numbered with translations',
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
