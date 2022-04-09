import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { DoDontList } from '../../src';

export const Do: Story<ComponentProps<typeof DoDontList>> = (args) => (
  <DoDontList {...args}>
    <DoDontList.Item>
      cover blisters that are likely to burst with a soft plaster or dressing
    </DoDontList.Item>
    <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
    <DoDontList.Item>
      allow the fluid in a burst blister to drain before covering it with a plaster or dressing
    </DoDontList.Item>
  </DoDontList>
);
Do.args = { listType: 'do' };

export const Dont: Story<ComponentProps<typeof DoDontList>> = (args) => (
  <DoDontList {...args}>
    <DoDontList.Item>do not burst a blister yourself</DoDontList.Item>
    <DoDontList.Item>do not peel the skin off a burst blister</DoDontList.Item>
    <DoDontList.Item>do not pick at the edges of the remaining skin</DoDontList.Item>
    <DoDontList.Item>
      do not wear the shoes or use the equipment that caused your blister until it heals
    </DoDontList.Item>
  </DoDontList>
);
Dont.args = { listType: 'dont' };

export default {
  title: 'Components/DoDontList',
  component: DoDontList,
  subcomponents: {
    'DoDontList.Item': DoDontList.Item,
  },
};
