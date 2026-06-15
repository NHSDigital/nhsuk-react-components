import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { WarningCallout } from '#components/content-presentation/warning-callout/index.js';

const meta: Meta<typeof WarningCallout> = {
  title: 'Content Presentation/Warning callout',
  component: WarningCallout,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the warning callout component and when to use it, visit the [design
          system in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/warning-callout) for
          guidance, examples and options.
        </Markdown>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof WarningCallout>;

export const Default: Story = {
  name: 'Warning callout default',
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Heading>Important</WarningCallout.Heading>
      <p>
        For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
        including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>
  ),
};

export const WithCustomHeading: Story = {
  name: 'Warning callout with custom heading',
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Heading>School, nursery or work</WarningCallout.Heading>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ),
};

export const WithCustomHeadingLevel: Story = {
  name: 'Warning callout with custom heading level',
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Heading headingLevel="h4">School, nursery or work</WarningCallout.Heading>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ),
};
