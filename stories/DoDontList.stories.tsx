import React from 'react';
import { DoDontList } from '../src';

export const Do = (): JSX.Element => (
  <DoDontList listType="do">
    <DoDontList.Item>
      cover blisters that are likely to burst with a soft plaster or dressing
    </DoDontList.Item>
    <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
    <DoDontList.Item>
      allow the fluid in a burst blister to drain before covering it with a plaster or dressing
    </DoDontList.Item>
  </DoDontList>
);

export const Dont = (): JSX.Element => (
  <DoDontList listType="dont">
    <DoDontList.Item>burst a blister yourself</DoDontList.Item>
    <DoDontList.Item>peel the skin off a burst blister</DoDontList.Item>
    <DoDontList.Item>pick at the edges of the remaining skin</DoDontList.Item>
    <DoDontList.Item>
      wear the shoes or use the equipment that caused your blister until it heals
    </DoDontList.Item>
  </DoDontList>
);

export default {
  title: 'Components/DoDontList',
  component: DoDontList,
};
