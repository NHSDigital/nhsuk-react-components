import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { DateInput, type DateInputValue } from '#components/form-elements/date-input/index.js';

const meta: Meta<typeof DateInput> = {
  title: 'Form Elements/Date input',
  component: DateInput,
  args: {
    legend: 'What is your date of birth?',
    legendProps: { isPageHeading: true, size: 'l' },
  },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  name: 'Date input default',
  args: {
    hint: 'For example, 15 3 1984',
  },
  render: (args) => <DateInput {...args} />,
};

export const WithError: Story = {
  name: 'Date input with error message only',
  args: {
    error: 'Enter your date of birth',
  },
  render: (args) => <DateInput {...args} />,
};

export const WithErrorDay: Story = {
  name: 'Date input with error on day input',
  args: {
    error: 'Date of birth must include a day',
  },
  render: (args) => (
    <DateInput {...args}>
      <DateInput.Day />
      <DateInput.Month defaultValue="3" error={false} />
      <DateInput.Year defaultValue="1984" error={false} />
    </DateInput>
  ),
};

export const WithErrorMonth: Story = {
  name: 'Date input with error on month input',
  args: {
    error: 'Date of birth must include a month',
  },
  render: (args) => (
    <DateInput {...args}>
      <DateInput.Day defaultValue="15" error={false} />
      <DateInput.Month />
      <DateInput.Year defaultValue="1984" error={false} />
    </DateInput>
  ),
};

export const WithErrorYear: Story = {
  name: 'Date input with error on year input',
  args: {
    error: 'Date of birth must include a year',
  },
  render: (args) => (
    <DateInput {...args}>
      <DateInput.Day defaultValue="15" error={false} />
      <DateInput.Month defaultValue="3" error={false} />
      <DateInput.Year />
    </DateInput>
  ),
};

export const WithErrorAndHint: Story = {
  name: 'Date input with error message and hint',
  args: {
    hint: 'For example, 15 3 1984',
    error: 'Enter your date of birth',
  },
  render: (args) => <DateInput {...args} />,
};

export const WithValue: Story = {
  name: 'Date input with value',
  args: {
    defaultValue: {
      day: '20',
      month: '09',
      year: '1996',
    },
  },
};

export const WithValues: Story = {
  name: 'Date input with values',
  args: {
    defaultValue: {
      day: '20',
      month: '09',
      year: '1996',
    },
  },
  render: ({ defaultValue, ...args }) => (
    <DateInput {...args}>
      <DateInput.Day defaultValue={defaultValue?.day} />
      <DateInput.Month defaultValue={defaultValue?.month} />
      <DateInput.Year defaultValue={defaultValue?.year} />
    </DateInput>
  ),
};

export const WithValueControlled: Story = {
  name: 'Date input with value, controlled',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  args: {
    value: {
      day: '20',
      month: '09',
      year: '1996',
    },
  },
};

export const WithValuesControlled: Story = {
  name: 'Date input with values, controlled',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
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

export const WithValueStateControlled: Story = {
  name: 'Date input with value state, controlled',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function WithValueStateControlledRender(args) {
    const [value, setValue] = useState<Partial<DateInputValue> | undefined>({
      day: '20',
      month: '09',
      year: '1996',
    });

    return <DateInput value={value} onChange={(e) => setValue(e.currentTarget.value)} {...args} />;
  },
};

export const OnChangeHandler: Story = {
  name: 'Date input change handler',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: (args) => (
    <>
      <ul className="nhsuk-list nhsuk-list--bullet">
        <li>Change handler is fired using the generated IDs and names</li>
        <li>The value is passed through</li>
      </ul>

      <hr />

      <DateInput onChange={(e) => console.log(e.target.value)} {...args} />
    </>
  ),
};
