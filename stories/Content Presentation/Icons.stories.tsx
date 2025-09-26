import React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightCircleIcon,
  ChevronRightCircleIcon,
  CrossIcon,
  SearchIcon,
  TickIcon,
  UserIcon,
} from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Content Presentation/Icons',
};
export default meta;
type Story = StoryObj<Element>;

export const ArrowLeft: Story = { render: (args) => <ArrowLeftIcon /> };
export const ArrowRight: Story = { render: (args) => <ArrowRightIcon /> };
export const ArrowRightCircle: Story = { render: (args) => <ArrowRightCircleIcon /> };
export const ChevronRightCircle: Story = { render: (args) => <ChevronRightCircleIcon /> };
export const Cross: Story = { render: (args) => <CrossIcon /> };
export const Search: Story = { render: (args) => <SearchIcon /> };
export const Tick: Story = { render: (args) => <TickIcon /> };
export const User: Story = { render: (args) => <UserIcon /> };
