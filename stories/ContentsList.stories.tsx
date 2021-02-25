import React from 'react';
import { ContentsList } from '../src';


export const Standard = () => (
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
);

export default {
  title: 'Components/ContentsList',
  component: ContentsList,
};
