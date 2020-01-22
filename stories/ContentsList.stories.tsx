/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContentsList } from '../src';

const stories = storiesOf('ContentsList', module);

stories.add('Normal', () => (
  <ContentsList aria-label="Pages in this guide">
    <ContentsList.Item current aria-current="page">
      What is AMD?
    </ContentsList.Item>
    <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">
      Symptoms
    </ContentsList.Item>
    <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">
      Getting diagnosed
    </ContentsList.Item>
    <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">
      Treatments
    </ContentsList.Item>
    <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">
      Living with AMD
    </ContentsList.Item>
  </ContentsList>
));
