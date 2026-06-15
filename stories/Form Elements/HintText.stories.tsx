import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { HintText } from '#components/form-elements/hint-text/index.js';

const meta: Meta<typeof HintText> = {
  title: 'Form Elements/Hint text',
  component: HintText,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the hint text component and when to use it, visit the [design system
          in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/hint-text) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof HintText>;

export const Default: Story = {
  args: {
    children: 'Do not include personal information like your name, date of birth or NHS number',
  },
  render: (args) => <HintText {...args} />,
};
