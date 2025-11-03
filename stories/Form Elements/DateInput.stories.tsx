import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DateInput, type DateInputValue } from '#components/form-elements/date-input/index.js';

const meta: Meta<typeof DateInput> = {
  title: 'Form Elements/DateInput',
  component: DateInput,
  args: {
    legend: 'What is your date of birth?',
    legendProps: { isPageHeading: true, size: 'l' },
    hint: 'For example, 15 3 1984',
  },
};
export default meta;
type Story = StoryObj<typeof DateInput>;

export const Standard: Story = {
  render: (args) => (
    <>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput onChange={(e) => console.log(e.target.value)} {...args} />
    </>
  ),
};

export const StandardWithError: Story = {
  render: (args) => (
    <>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput
        error="Enter your date of birth"
        onChange={(e) => console.log(e.target.value)}
        {...args}
      />

      <h5>Component with specific field errors</h5>
      <DateInput
        error="Date of birth must include a day"
        onChange={(e) => console.log(e.target.value)}
        {...args}
      >
        <DateInput.Day />
        <DateInput.Month error={false} />
        <DateInput.Year error={false} />
      </DateInput>
    </>
  ),
};

export const PrePopulatedIndividualComponents: Story = {
  render: (args) => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <DateInput {...args}>
        <DateInput.Day defaultValue={defaultValue.day} />
        <DateInput.Month defaultValue={defaultValue.month} />
        <DateInput.Year defaultValue={defaultValue.year} />
      </DateInput>
    );
  },
};

export const PrePopulatedWrapper: Story = {
  args: {
    defaultValue: {
      day: '20',
      month: '09',
      year: '1996',
    },
  },
  render: (args) => {
    return <DateInput {...args} />;
  },
};

export const ControlledElementIndividualComponents: Story = {
  args: {
    value: {
      day: '20',
      month: '09',
      year: '1996',
    },
  },
  render: ({ value, ...args }) => {
    return (
      <DateInput {...args}>
        <DateInput.Day value={value?.day} />
        <DateInput.Month value={value?.month} />
        <DateInput.Year value={value?.year} />
      </DateInput>
    );
  },
};

export const ControlledElementWrapper: Story = {
  args: {
    value: {
      day: '20',
      month: '09',
      year: '1996',
    },
  },
  render: (args) => {
    return <DateInput {...args} />;
  },
};

export const ChangeableControlledElement: Story = {
  render: function ChangeableControlledElementRender(args) {
    const [value, setValue] = useState<Partial<DateInputValue> | undefined>({
      day: '20',
      month: '09',
      year: '1996',
    });

    return <DateInput value={value} onChange={(e) => setValue(e.currentTarget.value)} {...args} />;
  },
};
