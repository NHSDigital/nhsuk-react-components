/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RibbonLink from '@components/ribbon-link/RibbonLink';

const meta: Meta<typeof RibbonLink> = {
  title: 'Extensions/ RibbonLink',
  component: RibbonLink,
};
export default meta;

type Story = StoryObj<typeof RibbonLink>;

export const CoolRibbon: Story = {
  render: () => (
    <div className="ribbonlink-demo">
      <RibbonLink flavour="cool">Cool Ribbon</RibbonLink>
    </div>
  ),
};

export const MildRibbon: Story = {
  render: () => (
    <div className="ribbonlink-demo">
      <RibbonLink flavour="mild">Mild Ribbon</RibbonLink>
    </div>
  ),
};

export const HotRibbon: Story = {
  render: () => (
    <div className="ribbonlink-demo">
      <RibbonLink flavour="hot">Hot Ribbon</RibbonLink>
    </div>
  ),
};

export const RibbonLinkBar: Story = {
  render: () => (
    <RibbonLink.Bar className="ribbonlink-demo">
      <RibbonLink flavour="cool">Cool Ribbon</RibbonLink>
      <RibbonLink flavour="mild">Mild Ribbon</RibbonLink>
      <RibbonLink flavour="hot">Hot Ribbon</RibbonLink>
    </RibbonLink.Bar>
  ),
};
