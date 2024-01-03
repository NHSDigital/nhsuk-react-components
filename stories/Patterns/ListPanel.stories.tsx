import React from 'react';
import { ListPanel } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component has been moved into a pattern. More information about how and when to use this component can be found in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/patterns/a-to-z-page).
 **/
const meta: Meta<typeof ListPanel> = {
  title: 'Patterns/ListPanel',
  component: ListPanel,
};
export default meta;
type Story = StoryObj<typeof ListPanel>;

export const Standard: Story = {
  argTypes: {
    type: { table: { disable: true } },
  },
  render: () => (
    <>
      <ListPanel>
        <ListPanel.Heading id="A">A</ListPanel.Heading>
        <ListPanel.List>
          <li><a href="/conditions/abdominal-aortic-aneurysm/">AAA</a></li>
          <li>
            <a href="/conditions/abdominal-aortic-aneurysm/">
              Abdominal aortic aneurysm
            </a>
          </li>
          <li>
            <a href="/conditions/abscess/">
              Abscess
            </a>
          </li>        
        </ListPanel.List>
      </ListPanel>
      <ListPanel.BackToTop href="#" />

      <ListPanel>
        <ListPanel.Heading id="B">B</ListPanel.Heading>
        <ListPanel.List>
          <li>There are currently no conditions listed</li>       
        </ListPanel.List>
      </ListPanel>
      <ListPanel.BackToTop href="#" />

      <ListPanel>
        <ListPanel.Heading id="C">C</ListPanel.Heading>
        <ListPanel.List>
          <li><a href="/conditions/chest-pain/">Chest pain</a></li>
          <li><a href="/conditions/cold-sores/">Cold sore</a></li>
        </ListPanel.List>
      </ListPanel>
      <ListPanel.BackToTop href="#" />

      <ListPanel>
        <ListPanel.Heading id="D">D</ListPanel.Heading>
        <ListPanel.List>
          <li><a href="/conditions/dandruff/">Dandruff</a></li>
          <li><a href="/conditions/dementia/">Dementia</a></li>
          <li><a href="/conditions/toothache/">Dental pain</a></li>
        </ListPanel.List>
      </ListPanel>
      <ListPanel.BackToTop href="#" />
    </>
  ),
};
