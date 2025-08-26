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
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Content Presentation/Icons',
};
export default meta;
type Story = StoryObj<Element>;

export const ArrowLeft: Story = { render: () => <ArrowLeftIcon /> };
export const ArrowRight: Story = { render: () => <ArrowRightIcon /> };
export const ArrowRightCircle: Story = { render: () => <ArrowRightCircleIcon /> };
export const ChevronRightCircle: Story = { render: () => <ChevronRightCircleIcon /> };
export const Cross: Story = { render: () => <CrossIcon /> };
export const Search: Story = { render: () => <SearchIcon /> };
export const Tick: Story = { render: () => <TickIcon /> };
export const User: Story = { render: () => <UserIcon /> };
