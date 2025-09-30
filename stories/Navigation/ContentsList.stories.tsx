import React from 'react';
import { ContentsList } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/contents-list" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `ContentsList` component has one subcomponent: `ContentsList.Item`.
 *
 * There are two default props set to the ContentsList: `role: 'navigation'` and `visuallyHiddenText: 'Contents'`. These are only default props and can be overriden.
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { ContentsList } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <ContentsList aria-label="Pages in this guide">
 *             <ContentsList.Item current>
 *                 What is AMD?
 *             </ContentsList.Item>
 *             <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">
 *                 Symptoms
 *             </ContentsList.Item>
 *             <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">
 *                 Getting diagnosed
 *             </ContentsList.Item>
 *             <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">
 *                 Treatments
 *             </ContentsList.Item>
 *             <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">
 *                 Living with AMD
 *             </ContentsList.Item>
 *         </ContentsList>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof ContentsList> = {
  title: 'Navigation/ContentsList',
  component: ContentsList,
};
export default meta;
type Story = StoryObj<typeof ContentsList>;

export const Standard: Story = {
  render: (args) => (
    <ContentsList aria-label="Pages in this guide">
      <ContentsList.Item current>What is AMD?</ContentsList.Item>
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
