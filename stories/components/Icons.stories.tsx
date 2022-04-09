import { Story } from '@storybook/react';
import React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CrossIcon,
  EmdashIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  SmallEmdashIcon,
  TickIcon,
} from '../../src';

export const ArrowLeft: Story = (args) => <ArrowLeftIcon {...args} />;
export const ArrowRight: Story = (args) => <ArrowRightIcon {...args} />;
export const ArrowRightCircle: Story = (args) => <ArrowRightCircleIcon {...args} />;
export const ChevronLeft: Story = (args) => <ChevronLeftIcon {...args} />;
export const ChevronRight: Story = (args) => <ChevronRightIcon {...args} />;
export const Close: Story = (args) => <CloseIcon {...args} />;
export const Cross: Story = (args) => <CrossIcon {...args} />;
export const SmallEmdash: Story = (args) => <SmallEmdashIcon {...args} />;
export const Emdash: Story = (args) => <EmdashIcon {...args} />;
export const Minus: Story = (args) => <MinusIcon {...args} />;
export const Plus: Story = (args) => <PlusIcon {...args} />;
export const Search: Story = (args) => <SearchIcon {...args} />;
export const Tick: Story = (args) => <TickIcon {...args} />;

export default {
  title: 'Components/Icons',
};
