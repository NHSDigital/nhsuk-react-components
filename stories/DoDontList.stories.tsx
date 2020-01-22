/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { DoDontList } from '../src';

const stories = storiesOf('DoDontList', module);

stories
  .add('Do', () => (
    <DoDontList listType="do">
      <DoDontList.Item>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoDontList.Item>
      <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
      <DoDontList.Item>
        allow the fluid in a burst blister to drain before covering it with a plaster or dressing
      </DoDontList.Item>
    </DoDontList>
  ))
  .add("Don't", () => (
    <DoDontList listType="dont">
      <DoDontList.Item>do not burst a blister yourself</DoDontList.Item>
      <DoDontList.Item>do not peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item>do not pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item>
        do not wear the shoes or use the equipment that caused your blister until it heals
      </DoDontList.Item>
    </DoDontList>
  ));
