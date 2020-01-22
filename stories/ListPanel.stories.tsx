/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListPanel } from '../src';

const stories = storiesOf('List Panel', module);

stories.add('Standard', () => (
  <ListPanel>
    <ListPanel.Panel label="A" labelProps={{ id: 'A' }} backToTop backToTopLink="#">
      <ListPanel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">AAA</ListPanel.LinkItem>
      <ListPanel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">
        Abdominal aortic aneurysm
      </ListPanel.LinkItem>
      <ListPanel.LinkItem href="/conditions/abscess/">Abscess</ListPanel.LinkItem>
    </ListPanel.Panel>
    <ListPanel.Panel label="B" labelProps={{ id: 'A' }} backToTop noResults backToTopLink="#">
      There are currently no conditions listed
    </ListPanel.Panel>
    <ListPanel.Panel label="C" labelProps={{ id: 'C' }} backToTop backToTopLink="#">
      <ListPanel.LinkItem href="/conditions/chest-pain/">Chest pain</ListPanel.LinkItem>
      <ListPanel.LinkItem href="/conditions/cold-sores/">Cold sore</ListPanel.LinkItem>
    </ListPanel.Panel>
    <ListPanel.Panel label="D" labelProps={{ id: 'D' }} backToTop backToTopLink="#">
      <ListPanel.LinkItem href="/conditions/dandruff/">Dandruff</ListPanel.LinkItem>
      <ListPanel.LinkItem href="/conditions/dementia/">Dementia</ListPanel.LinkItem>
      <ListPanel.LinkItem href="/conditions/toothache/">Dental pain</ListPanel.LinkItem>
    </ListPanel.Panel>
  </ListPanel>
));
