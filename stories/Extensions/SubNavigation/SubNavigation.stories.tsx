/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SubNavigation from '@components/sub-navigation/SubNavigation';

const meta: Meta<typeof SubNavigation> = {
  title: 'Extensions/Sub Navigation Panel',
  component: SubNavigation,
};
export default meta;

type Story = StoryObj<typeof SubNavigation>;

export const Standard: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(1);

    return (
      <SubNavigation>
        <SubNavigation.Item
          aria-current={activeTab === 1 ? 'page' : false}
          onClick={() => setActiveTab(1)}
        >
          Tab 1
        </SubNavigation.Item>
        <SubNavigation.Item
          aria-current={activeTab === 2 ? 'page' : false}
          onClick={() => setActiveTab(2)}
        >
          Tab 2
        </SubNavigation.Item>
        <SubNavigation.Item
          aria-current={activeTab === 3 ? 'page' : false}
          onClick={() => setActiveTab(3)}
        >
          Tab 3
        </SubNavigation.Item>
      </SubNavigation>
    );
  },
};
