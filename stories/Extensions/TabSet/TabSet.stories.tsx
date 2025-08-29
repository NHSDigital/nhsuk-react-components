/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TabSet from '@components/tab-set/TabSet';

const meta: Meta<typeof TabSet> = {
  title: 'Extensions/TabSet',
  component: TabSet,
};
export default meta;

type Story = StoryObj<typeof TabSet>;

export const Standard: Story = {
  render: () => (
    <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab disabled>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ),
};

export const WithEmptyTab: Story = {
  render: () => (
    <>
      <TabSet>
        <TabSet.Tab>Overview</TabSet.Tab>
        <TabSet.Tab active>Demographics</TabSet.Tab>
        <TabSet.Tab empty>Clinicals</TabSet.Tab>
        <TabSet.Tab>Documents</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ),
};

export const WithDifferentSizes: Story = {
  render: () => (
    <>
      <TabSet>
        <TabSet.Tab style={{ maxWidth: 200 }}>Overview</TabSet.Tab>
        <TabSet.Tab style={{ minWidth: 450 }}>Demographics</TabSet.Tab>
        <TabSet.Tab style={{ flexGrow: 2 }}>Clinicals</TabSet.Tab>
        <TabSet.Tab style={{ flexGrow: 0.5 }}>Documents</TabSet.Tab>
        <TabSet.Tab>Settings</TabSet.Tab>
      </TabSet>
      <br />
    </>
  ),
};
