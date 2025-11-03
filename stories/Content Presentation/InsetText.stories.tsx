import { type Meta, type StoryObj } from '@storybook/react-vite';
import { InsetText } from '#components/content-presentation/inset-text/index.js';

const meta: Meta<typeof InsetText> = {
  title: 'Content Presentation/InsetText',
  component: InsetText,
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

export const Standard: Story = {};
