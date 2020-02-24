/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabSet } from '../src';

const stories = storiesOf('Tab Set', module);

stories
  .add('Standard', () => (
    <div>
      <TabSet>
        <TabSet.Tab id={'overview-tab'}>Overview</TabSet.Tab>

        <TabSet.Tab isActive={true}>Demographics</TabSet.Tab>

        <TabSet.Tab>Clinicals</TabSet.Tab>

        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Disabled Tab', () => (
    <div>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>

        <TabSet.Tab isActive={true}>Demographics</TabSet.Tab>

        <TabSet.Tab isDisabled={true}>Clinicals</TabSet.Tab>

        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Empty Tab', () => (
    <div>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>

        <TabSet.Tab isActive={true}>Demographics</TabSet.Tab>

        <TabSet.Tab isEmpty={true}>Clinicals</TabSet.Tab>

        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Custom Tab Sizing', () => (
    <div>
      <TabSet>
        <TabSet.Tab md={2}>Overview</TabSet.Tab>

        <TabSet.Tab isActive={true} xs={12} sm={4}>
          Demographics
        </TabSet.Tab>

        <TabSet.Tab md={3} lg={4}>
          Clinicals
        </TabSet.Tab>

        <TabSet.Tab lg={5}>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Tab auto-sizing', () => (
    <div>
      <TabSet>
        <TabSet.Tab autoSize={true}>Overview</TabSet.Tab>

        <TabSet.Tab isActive={true} autoSize={true}>
          Demographics
        </TabSet.Tab>

        <TabSet.Tab autoSize={true}>Clinicals</TabSet.Tab>

        <TabSet.Tab autoSize={true}>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Alignment', () => (
    <div>
      <TabSet end={"lg"}>
        <TabSet.Tab lg={2}>Overview</TabSet.Tab>
        <TabSet.Tab isActive={true} lg={2}>
          Demographics
        </TabSet.Tab>
        <TabSet.Tab lg={2}>Clinicals</TabSet.Tab>
        <TabSet.Tab lg={2}>Documents</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ))
  .add('With Spacing', () => (
    <div>
      <TabSet between={'lg'}>
        <TabSet.Tab lg={2}>Overview</TabSet.Tab>
        <TabSet.Tab isActive={true} lg={2}>
          Demographics
        </TabSet.Tab>
        <TabSet.Tab lg={2}>Clinicals</TabSet.Tab>
        <TabSet.Tab lg={2}>Documents</TabSet.Tab>
        <TabSet.Tab lg={2}>Settings</TabSet.Tab>
      </TabSet>
      <div style={{ height: '15px' }} />
    </div>
  ));
