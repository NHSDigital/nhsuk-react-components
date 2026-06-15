import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { InsetText } from '#components/content-presentation/inset-text/index.js';

const meta: Meta<typeof InsetText> = {
  title: 'Content Presentation/Inset text',
  component: InsetText,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the inset text component and when to use it, visit the [design system
          in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/inset-text) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
  render: (args) => (
    <InsetText {...args}>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ),
};

export default meta;
type Story = StoryObj<typeof InsetText>;

export const Default: Story = {};
