import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  ChevronRightCircleIcon,
  CrossIcon,
  SearchIcon,
  TickIcon,
  UserIcon,
} from '#components/content-presentation/icons/individual/index.js';

const meta: Meta = {
  title: 'Content Presentation/Icons',
};

export default meta;
type Story = StoryObj<Element>;

export const ArrowLeft: Story = {
  name: 'Arrow left',
  render: (args) => <ArrowLeftIcon />,
};

export const ArrowRight: Story = {
  name: 'Arrow right',
  render: (args) => <ArrowRightIcon />,
};

export const ArrowRightCircle: Story = {
  name: 'Arrow right circle',
  render: (args) => <ArrowRightCircleIcon />,
};

export const ChevronRightCircle: Story = {
  name: 'Chevron right circle',
  render: (args) => <ChevronRightCircleIcon />,
};

export const Cross: Story = {
  name: 'Cross',
  render: (args) => <CrossIcon />,
};

export const Search: Story = {
  name: 'Search',
  render: (args) => <SearchIcon />,
};

export const Tick: Story = {
  name: 'Tick',
  render: (args) => <TickIcon />,
};

export const User: Story = {
  name: 'User',
  render: (args) => <UserIcon />,
};
