/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Tag } from '../src';

const stories = storiesOf('Tag', module);

stories
  .addDecorator(centered)
  .add('Standard Tag', () => <Tag>Active</Tag>)
  .add('All Colours', () => (
    <div className="tag-wrapper">
      <Tag color="white">Started</Tag>
      <Tag color="grey">Not started</Tag>
      <Tag color="green">New</Tag>
      <Tag color="aqua-green">Active</Tag>
      <Tag color="blue">Pending</Tag>
      <Tag color="purple">Received</Tag>
      <Tag color="pink">Sent</Tag>
      <Tag color="red">Rejected</Tag>
      <Tag color="orange">Declined</Tag>
      <Tag color="yellow">Delayed</Tag>
    </div>
  ));
