import React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  SmallEmdashIcon,
  CrossIcon,
  EmdashIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  TickIcon,
} from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Icons',
};
export default meta;
type Story = StoryObj<Element>;

export const ArrowLeft: Story = { render: (args) => <ArrowLeftIcon /> };
export const ArrowRight: Story = { render: (args) => <ArrowRightIcon /> };
export const ArrowRightCircle: Story = { render: (args) => <ArrowRightCircleIcon /> };
export const ChevronLeft: Story = { render: (args) => <ChevronLeftIcon /> };
export const ChevronRight: Story = { render: (args) => <ChevronRightIcon /> };
export const Close: Story = { render: (args) => <CloseIcon /> };
export const Cross: Story = { render: (args) => <CrossIcon /> };
export const SmallEmdash: Story = { render: (args) => <SmallEmdashIcon /> };
export const Emdash: Story = { render: (args) => <EmdashIcon /> };
export const Minus: Story = { render: (args) => <MinusIcon /> };
export const Plus: Story = { render: (args) => <PlusIcon /> };
export const Search: Story = { render: (args) => <SearchIcon /> };
export const Tick: Story = { render: (args) => <TickIcon /> };
