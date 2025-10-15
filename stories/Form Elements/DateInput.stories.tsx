import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DateInput, type DateInputValue } from '#components';

const meta: Meta<typeof DateInput> = {
  title: 'Form Elements/DateInput',
  component: DateInput,
};
export default meta;
type Story = StoryObj<typeof DateInput>;

export const Standard: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput
        legend="What is your date of birth?"
        legendProps={{ isPageHeading: true, size: 'l' }}
        hint="For example, 15 3 1984"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  ),
};

export const StandardWithError: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput
        legend="What is your date of birth?"
        legendProps={{ isPageHeading: true, size: 'l' }}
        hint="For example, 15 3 1984"
        error="Enter your date of birth"
        onChange={(e) => console.log(e.target.value)}
      />
      <h5>Component with specific field errors</h5>

      <DateInput
        hint="For example, 15 3 1984"
        legend="What is your date of birth?"
        legendProps={{ isPageHeading: true, size: 'l' }}
        error="Date of birth must include a day"
        onChange={(e) => console.log(e.target.value)}
      >
        <DateInput.Day />
        <DateInput.Month error={false} />
        <DateInput.Year error={false} />
      </DateInput>
    </div>
  ),
};

export const PrePopulatedIndividualComponents: Story = {
  render: () => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput
          legend="What is your date of birth?"
          legendProps={{ isPageHeading: true, size: 'l' }}
          hint="For example, 15 3 1984"
        >
          <DateInput.Day defaultValue={defaultValue.day} />
          <DateInput.Month defaultValue={defaultValue.month} />
          <DateInput.Year defaultValue={defaultValue.year} />
        </DateInput>
      </div>
    );
  },
};

export const PrePopulatedWrapper: Story = {
  render: () => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput
          legend="What is your date of birth?"
          legendProps={{ isPageHeading: true, size: 'l' }}
          hint="For example, 15 3 1984"
          defaultValue={defaultValue}
        />
      </div>
    );
  },
};

export const ControlledElementIndividualComponents: Story = {
  render: () => {
    const value = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput
          legend="What is your date of birth?"
          legendProps={{ isPageHeading: true, size: 'l' }}
          hint="For example, 15 3 1984"
        >
          <DateInput.Day value={value.day} />
          <DateInput.Month value={value.month} />
          <DateInput.Year value={value.year} />
        </DateInput>
      </div>
    );
  },
};

export const ControlledElementWrapper: Story = {
  render: () => {
    const value = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput
          legend="What is your date of birth?"
          legendProps={{ isPageHeading: true, size: 'l' }}
          hint="For example, 15 3 1984"
          value={value}
        />
      </div>
    );
  },
};

export const ChangeableControlledElement: Story = {
  render: function ChangeableControlledElementRender() {
    const [value, setValue] = useState<Partial<DateInputValue> | undefined>({
      day: '20',
      month: '09',
      year: '1996',
    });

    return (
      <DateInput
        legend="What is your date of birth?"
        legendProps={{ isPageHeading: true, size: 'l' }}
        hint="For example, 15 3 1984"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    );
  },
};
