import { type Meta, type StoryObj } from '@storybook/react-vite';
import { ContentsList } from '#components';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/contents-list" target="_blank" rel="noopener noreferrer">here</a>.
 */
const meta: Meta<typeof ContentsList> = {
  title: 'Navigation/ContentsList',
  component: ContentsList,
};
export default meta;
type Story = StoryObj<typeof ContentsList>;

export const Standard: Story = {
  argTypes: {
    'aria-label': {
      control: 'text',
      table: {
        defaultValue: { summary: 'Pages in this guide' },
      },
    },
    'visuallyHiddenText': {
      control: 'text',
      table: {
        defaultValue: { summary: 'Contents' },
      },
    },
  },
  render: (args) => (
    <ContentsList {...args}>
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
