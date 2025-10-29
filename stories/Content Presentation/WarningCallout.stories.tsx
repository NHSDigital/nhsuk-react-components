import { type Meta, type StoryObj } from '@storybook/react-vite';
import { WarningCallout } from '#components';

const meta: Meta<typeof WarningCallout> = {
  title: 'Content Presentation/WarningCallout',
  component: WarningCallout,
};
export default meta;
type Story = StoryObj<typeof WarningCallout>;

export const StandardWarningCallout: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Heading>Important</WarningCallout.Heading>
      <p>
        For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
        including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>
  ),

  name: 'WarningCallout',
};

export const WarningCalloutWithCustomHeading: Story = {
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

export const WarningCalloutWithCustomHeadingLevel: Story = {
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
