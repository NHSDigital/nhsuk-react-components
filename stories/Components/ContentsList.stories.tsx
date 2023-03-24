import React from 'react';
import { ContentsList } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ContentsList> = {
  title: 'Components/ContentsList',
  component: ContentsList,
};
export default meta;
type Story = StoryObj<typeof ContentsList>;

export const Standard: Story = {
  render: () => (
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
  ),
};
