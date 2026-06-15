import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Label } from '#components/form-elements/label/index.js';

const meta: Meta<typeof Label> = {
  title: 'Form Elements/Label',
  component: Label,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the label component and when to use it, visit the [design system in
          the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/label) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
  args: {
    children: 'National Insurance Number',
    size: undefined,
    isPageHeading: true,
  },
  argTypes: {
    size: { control: 'select', options: [undefined, 's', 'm', 'l', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  name: 'Label default',
  args: {
    size: 'l',
  },
};

export const WithCustomSizeS: Story = {
  name: 'Label with size S text',
  args: {
    size: 's',
  },
};

export const WithCustomSizeM: Story = {
  name: 'Label with size M text',
  args: {
    size: 'm',
  },
};

export const WithCustomSizeL: Story = {
  name: 'Label with size L text',
  args: {
    size: 'l',
  },
};

export const WithCustomSizeXL: Story = {
  name: 'Label with size XL text',
  args: {
    size: 'xl',
  },
};
