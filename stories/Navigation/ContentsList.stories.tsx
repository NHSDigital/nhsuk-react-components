import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ContentsList } from '#components/navigation/contents-list/index.js';

const meta: Meta<typeof ContentsList> = {
  title: 'Navigation/Contents list',
  component: ContentsList,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the contents list component and when to use it, visit the [design
          system in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/contents-list) for
          guidance, examples and options.
        </Markdown>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentsList>;

export const Default: Story = {
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
