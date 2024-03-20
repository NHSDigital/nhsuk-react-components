import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Panel from '@patterns/panel/Panel';

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
};
export default meta;
type Story = StoryObj<typeof Panel>;

Panel.LinkItem.displayName = 'Panel.LinkItem';

export const Standard: Story = {
  argTypes: {
    type: { table: { disable: true } },
  },
  render: () => (
    <Panel label="A" labelProps={{ id: 'A' }} backToTop backToTopLink="#">
      <Panel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">AAA</Panel.LinkItem>
      <Panel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">
        Abdominal aortic aneurysm
      </Panel.LinkItem>
      <Panel.LinkItem href="/conditions/abscess/">Abscess</Panel.LinkItem>
    </Panel>
  ),
};
