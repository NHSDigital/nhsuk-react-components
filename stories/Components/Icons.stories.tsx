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

export const ArrowLeft: Story = { render: () => <ArrowLeftIcon /> };
export const ArrowRight: Story = { render: () => <ArrowRightIcon /> };
export const ArrowRightCircle: Story = { render: () => <ArrowRightCircleIcon /> };
export const ChevronLeft: Story = { render: () => <ChevronLeftIcon /> };
export const ChevronRight: Story = { render: () => <ChevronRightIcon /> };
export const Close: Story = { render: () => <CloseIcon /> };
export const Cross: Story = { render: () => <CrossIcon /> };
export const SmallEmdash: Story = { render: () => <SmallEmdashIcon /> };
export const Emdash: Story = { render: () => <EmdashIcon /> };
export const Minus: Story = { render: () => <MinusIcon /> };
export const Plus: Story = { render: () => <PlusIcon /> };
export const Search: Story = { render: () => <SearchIcon /> };
export const Tick: Story = { render: () => <TickIcon /> };
