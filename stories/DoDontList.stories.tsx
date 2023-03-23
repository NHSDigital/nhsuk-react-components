import React from 'react';
import { DoDontList } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DoDontList> = {
  title: 'Components/DoDontList',
  component: DoDontList,
};
export default meta;
type Story = StoryObj<typeof DoDontList>;

export const Do: Story = {
  render: () => (
    <DoDontList listType="do">
      <DoDontList.Item>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoDontList.Item>
      <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
      <DoDontList.Item>
        allow the fluid in a burst blister to drain before covering it with a plaster or dressing
      </DoDontList.Item>
    </DoDontList>
  ),
};

export const Dont: Story = {
  render: () => (
    <DoDontList listType="dont">
      <DoDontList.Item>do not burst a blister yourself</DoDontList.Item>
      <DoDontList.Item>do not peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item>do not pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item>
        do not wear the shoes or use the equipment that caused your blister until it heals
      </DoDontList.Item>
    </DoDontList>
  ),
};
