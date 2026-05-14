import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, Fragment, useState } from 'react';

import { SummaryList } from '#components/content-presentation/summary-list/index.js';
import { Checkboxes } from '#components/form-elements/checkboxes/index.js';
import { Fieldset } from '#components/form-elements/fieldset/Fieldset.js';
import { BodyText } from '#components/typography/BodyText.js';
import { Heading } from '#components/typography/Heading.js';

import { ExampleEmail, ExampleMobilePhoneNumber, ExamplePhoneNumber } from './TextInput.stories.js';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/checkboxes" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation notes
 *
 * The `Checkbox` component provides a `CheckboxesContext` context, which the `Checkboxes.Item` components use. When each box initially renders, it will attempt to assign itself an `id` by calling the `getBoxId` method in the context. This will assign each box a sequential ID using either the `idPrefix` or `name` supplied to the Checkbox. If neither are provided, the element will generate it's own unique identifier.
 */

const meta: Meta<typeof Checkboxes> = {
  title: 'Form Elements/Checkboxes',
  component: Checkboxes,
  args: {
    legend: 'How do you want to be contacted about this?',
    legendProps: { isPageHeading: true, size: 'l' },
    name: 'example',
  },
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {
  name: 'Checkboxes default',
  args: {
    hint: 'Select all options that are relevant to you',
    name: 'default',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email">Email</Checkboxes.Item>
      <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
      <Checkboxes.Item value="text">Text message</Checkboxes.Item>
    </Checkboxes>
  ),
};

export const Small: Story = {
  name: 'Checkboxes small',
  args: {
    ...Default.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small',
    small: true,
  },
  render: Default.render,
};

export const WithCaption: Story = {
  name: 'Checkboxes with caption',
  args: {
    legend: (
      <>
        <span className="nhsuk-caption-l">About you</span>
        How do you want to be contacted about this?
      </>
    ),
    name: 'with-caption',
  },
  render: Default.render,
};

export const SmallWithCaption: Story = {
  name: 'Checkboxes with caption, small',
  args: {
    ...WithCaption.args,
    legend: (
      <>
        <span className="nhsuk-caption-m">About you</span> How do you want to be contacted about
        this?
      </>
    ),
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-caption',
    small: true,
  },
  render: WithCaption.render,
};

export const WithHint: Story = {
  name: 'Checkboxes with hint',
  args: {
    legend: 'What is your nationality?',
    hint: 'If you have dual nationality, select all options that are relevant to you',
    name: 'with-hint',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="british">British</Checkboxes.Item>
      <Checkboxes.Item value="irish">Irish</Checkboxes.Item>
      <Checkboxes.Item value="other">Citizen of another country</Checkboxes.Item>
    </Checkboxes>
  ),
};

export const SmallWithHint: Story = {
  name: 'Checkboxes with hint, small',
  args: {
    ...WithHint.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-hint',
    small: true,
  },
  render: WithHint.render,
};

export const WithHintOnItems: Story = {
  name: 'Checkboxes with hints on items',
  args: {
    legend: 'What is your nationality?',
    hint: 'If you have dual nationality, select all options that are relevant to you',
    name: 'with-hint-on-items',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item hint="including English, Scottish, Welsh and Northern Irish" value="british">
        British
      </Checkboxes.Item>
      <Checkboxes.Item value="irish">Irish</Checkboxes.Item>
      <Checkboxes.Item value="other">Citizen of another country</Checkboxes.Item>
    </Checkboxes>
  ),
};

export const SmallWithHintOnItems: Story = {
  name: 'Checkboxes with hints on items, small',
  args: {
    ...WithHintOnItems.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-hint-on-items',
    small: true,
  },
  render: WithHintOnItems.render,
};

export const WithError: Story = {
  name: 'Checkboxes with error message',
  args: {
    error: 'Select how you want to be contacted',
    name: 'with-error',
  },
  render: Default.render,
};

export const SmallWithError: Story = {
  name: 'Checkboxes with error message, small',
  args: {
    ...WithError.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-error',
    small: true,
  },
  render: WithError.render,
};

export const WithHintAndError: Story = {
  name: 'Checkboxes with error message and hint',
  args: {
    hint: 'Select all options that are relevant to you',
    error: 'Select how you want to be contacted',
    name: 'with-hint-and-error',
  },
  render: Default.render,
};

export const SmallWithHintAndError: Story = {
  name: 'Checkboxes with error message and hint, small',
  args: {
    ...WithHintAndError.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-hint-and-error',
    small: true,
  },
  render: WithHintAndError.render,
};

export const WithDisabledItem: Story = {
  name: 'Checkboxes with disabled item',
  args: {
    name: 'with-disabled-item',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="red">Red</Checkboxes.Item>
      <Checkboxes.Item value="green">Green</Checkboxes.Item>
      <Checkboxes.Item value="blue" disabled>
        Blue
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const SmallWithDisabledItem: Story = {
  name: 'Checkboxes with disabled item, small',
  args: {
    ...WithDisabledItem.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-disabled-item',
    small: true,
  },
  render: WithDisabledItem.render,
};

export const WithValues: Story = {
  name: 'Checkboxes with pre-checked values',
  args: {
    name: 'with-values',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email" defaultChecked>
        Email
      </Checkboxes.Item>
      <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
      <Checkboxes.Item value="text" defaultChecked>
        Text message
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithValueStateControlled: Story = {
  name: 'Checkboxes with pre-checked values state, controlled',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function WithValueStateControlledRender(args) {
    const [values, setValues] = useState<Set<string>>(new Set(['email', 'text']));

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const updated = new Set(values);

      if (target.checked) {
        updated.add(target.value);
      } else {
        updated.delete(target.value);
      }

      setValues(updated);
    };

    return (
      <>
        <Checkboxes {...args}>
          <Checkboxes.Item value="email" checked={values?.has('email')} onChange={handleChange}>
            Email
          </Checkboxes.Item>
          <Checkboxes.Item value="phone" checked={values?.has('phone')} onChange={handleChange}>
            Phone
          </Checkboxes.Item>
          <Checkboxes.Item value="text" checked={values?.has('text')} onChange={handleChange}>
            Text message
          </Checkboxes.Item>
        </Checkboxes>

        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Values</SummaryList.Key>
            <SummaryList.Value>
              <samp>{values.size ? [...values].join(', ') : 'None'}</samp>
            </SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </>
    );
  },
};

export const WithConditionalContent: Story = {
  name: 'Checkboxes with conditional content',
  args: {
    hint: 'Select all options that are relevant to you',
    name: 'with-conditional-content',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email" conditional={<ExampleEmail />}>
        Email
      </Checkboxes.Item>
      <Checkboxes.Item value="phone" conditional={<ExamplePhoneNumber />}>
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item value="text" conditional={<ExampleMobilePhoneNumber />}>
        Text message
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithConditionalContentValues: Story = {
  name: 'Checkboxes with conditional content and pre-checked values',
  args: {
    name: 'with-conditional-content-values',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item
        value="email"
        conditional={<ExampleEmail defaultValue="karen.francis@example.com" />}
        defaultChecked
      >
        Email
      </Checkboxes.Item>
      <Checkboxes.Item value="phone" conditional={<ExamplePhoneNumber />}>
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item
        value="text"
        conditional={<ExampleMobilePhoneNumber defaultValue="07700 900362" />}
        defaultChecked
      >
        Text message
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithConditionalContentValuesStateControlled: Story = {
  name: 'Checkboxes with conditional content and pre-checked values state, controlled',
  args: {
    name: 'with-conditional-content-values-state-controlled',
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function WithConditionalContentValuesStateControlledRender(args) {
    const [values, setValues] = useState<Set<string>>(new Set(['email', 'text']));
    const [inputs, setInputs] = useState<Map<string, string>>(
      new Map([
        ['contact-by-email', 'karen.francis@example.com'],
        ['contact-by-text', '07700 900362'],
      ]),
    );

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const updated = new Set(values);

      if (target.checked) {
        updated.add(target.value);
      } else {
        updated.delete(target.value);
      }

      setValues(updated);
    };

    const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const updated = new Map(inputs);

      updated.set(target.name, target.value);
      setInputs(updated);
    };

    return (
      <>
        <Checkboxes {...args}>
          <Checkboxes.Item
            value="email"
            conditional={
              <ExampleEmail value={inputs?.get('contact-by-email')} onChange={handleInput} />
            }
            checked={values?.has('email')}
            onChange={handleChange}
          >
            Email
          </Checkboxes.Item>
          <Checkboxes.Item
            value="phone"
            conditional={
              <ExamplePhoneNumber value={inputs?.get('contact-by-phone')} onChange={handleInput} />
            }
            checked={values?.has('phone')}
            onChange={handleChange}
          >
            Phone
          </Checkboxes.Item>
          <Checkboxes.Item
            value="text"
            conditional={
              <ExampleMobilePhoneNumber
                value={inputs?.get('contact-by-text')}
                onChange={handleInput}
              />
            }
            checked={values?.has('text')}
            onChange={handleChange}
          >
            Text message
          </Checkboxes.Item>
        </Checkboxes>

        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Values</SummaryList.Key>
            <SummaryList.Value>
              <samp>{values.size ? [...values].join(', ') : 'None'}</samp>
            </SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Inputs</SummaryList.Key>
            <SummaryList.Value>
              {inputs.size ? (
                [...inputs.entries()].map(([key, value]) => (
                  <Fragment key={key}>
                    <samp>{value}</samp>
                    <br />
                  </Fragment>
                ))
              ) : (
                <samp>None</samp>
              )}
            </SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </>
    );
  },
};

export const WithConditionalContentError: Story = {
  name: 'Checkboxes with conditional content, error message',
  args: {
    hint: 'Select all options that are relevant to you',
    error: 'Select how you like to be contacted',
    name: 'with-conditional-content-error',
  },
  render: WithConditionalContent.render,
};

export const WithConditionalContentErrorNested: Story = {
  name: 'Checkboxes with conditional content, error message (nested)',
  args: {
    hint: 'Select all options that are relevant to you',
    name: 'with-conditional-content-error-nested',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email" conditional={<ExamplePhoneNumber />}>
        Email
      </Checkboxes.Item>
      <Checkboxes.Item
        value="phone"
        conditional={<ExampleEmail error="Enter your phone number" />}
        defaultChecked
      >
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item value="text" conditional={<ExampleMobilePhoneNumber />}>
        Text message
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithExclusiveNoneOption: Story = {
  name: 'Checkboxes with "none of the above" option',
  args: {
    legend: 'How do you want to be contacted about this?',
    hint: 'Select all options that are relevant to you',
    name: 'with-exclusive-none-option',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email">Email</Checkboxes.Item>
      <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
      <Checkboxes.Item value="text">Text message</Checkboxes.Item>
      <Checkboxes.Divider />
      <Checkboxes.Item value="none" exclusive>
        None of the above
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithExclusiveNoneOptionConditional: Story = {
  name: 'Checkboxes with "none of the above" option, conditional content',
  args: {
    legend: 'How do you want to be contacted about this?',
    hint: 'Select all options that are relevant to you',
    name: 'with-exclusive-none-option-conditional',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email" conditional={<ExampleEmail />}>
        Email
      </Checkboxes.Item>
      <Checkboxes.Item value="phone" conditional={<ExamplePhoneNumber />}>
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item value="text" conditional={<ExampleMobilePhoneNumber />}>
        Text message
      </Checkboxes.Item>
      <Checkboxes.Divider />
      <Checkboxes.Item value="none" exclusive>
        None of the above
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithExclusiveNoneOptionNamed: Story = {
  name: 'Checkboxes with "none of the above" option (named groups)',
  args: {
    name: 'with-exclusive-none-option-named',
  },
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend headingLevel="h1" size="l">
        What is your address?
      </Fieldset.Legend>

      <Heading headingLevel="h2" size="m">
        Primary colours
      </Heading>

      <Checkboxes idPrefix="colour-primary" name="colour">
        <Checkboxes.Item value="red" exclusiveGroup="colour-primary">
          Red
        </Checkboxes.Item>
        <Checkboxes.Item
          value="yellow"
          exclusiveGroup="colour-primary"
          conditional={<BodyText>Orange is much nicer than yellow!</BodyText>}
        >
          Yellow
        </Checkboxes.Item>
        <Checkboxes.Item value="blue" exclusiveGroup="colour-primary">
          Blue
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none-primary" exclusiveGroup="colour-primary" exclusive>
          None of the primary colours
        </Checkboxes.Item>
      </Checkboxes>

      <Heading headingLevel="h2" size="m">
        Secondary colours
      </Heading>

      <Checkboxes idPrefix="colour-secondary" name="colour">
        <Checkboxes.Item value="green" exclusiveGroup="colour-secondary">
          Green
        </Checkboxes.Item>
        <Checkboxes.Item value="purple" exclusiveGroup="colour-secondary">
          Purple
        </Checkboxes.Item>
        <Checkboxes.Item
          value="orange"
          exclusiveGroup="colour-secondary"
          conditional={<BodyText>I like orange too!</BodyText>}
        >
          Orange
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none-secondary" exclusiveGroup="colour-secondary" exclusive>
          None of the secondary colours
        </Checkboxes.Item>
      </Checkboxes>

      <Heading headingLevel="h2" size="m">
        Other colours
      </Heading>

      <Checkboxes idPrefix="colour-other" name="colour">
        <Checkboxes.Item value="imaginary" exclusiveGroup="colour-other">
          An imaginary colour
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" exclusive>
          None of the above
        </Checkboxes.Item>
      </Checkboxes>
    </Fieldset>
  ),
};

export const NoIDSupplied: Story = {
  name: 'Checkboxes with no ID supplied',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function NoIDSuppliedRender() {
    const [checkbox1, setCheckbox1] = useState<HTMLInputElement | null>(null);
    const [checkbox2, setCheckbox2] = useState<HTMLInputElement | null>(null);
    const [checkbox3, setCheckbox3] = useState<HTMLInputElement | null>(null);

    return (
      <>
        <ul className="nhsuk-list nhsuk-list--bullet">
          <li>Checkboxes are selectable via their labels</li>
          <li>Checkboxes are assigned IDs</li>
        </ul>

        <hr />

        <Checkboxes>
          <Checkboxes.Item ref={(el) => setCheckbox1(el)}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox2(el)}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox3(el)}>Box 3</Checkboxes.Item>
        </Checkboxes>

        {[
          { name: 'Box 1', el: checkbox1 },
          { name: 'Box 2', el: checkbox2 },
          { name: 'Box 3', el: checkbox3 },
        ].map(({ name, el }) => (
          <SummaryList key={name}>
            <SummaryList.Row>
              <SummaryList.Key>Label</SummaryList.Key>
              <SummaryList.Value>
                <samp>{name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row>
              <SummaryList.Key>Name</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row noBorder>
              <SummaryList.Key>ID</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.id}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
          </SummaryList>
        ))}
      </>
    );
  },
};

export const NameSupplied: Story = {
  name: 'Checkboxes with name supplied',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function NameSuppliedRender() {
    const [checkbox1, setCheckbox1] = useState<HTMLInputElement | null>(null);
    const [checkbox2, setCheckbox2] = useState<HTMLInputElement | null>(null);
    const [checkbox3, setCheckbox3] = useState<HTMLInputElement | null>(null);

    return (
      <>
        <ul className="nhsuk-list nhsuk-list--bullet">
          <li>Checkboxes are selectable via their labels</li>
          <li>Checkboxes have the same name as the checkboxes component</li>
        </ul>

        <hr />

        <Checkboxes name="name-supplied">
          <Checkboxes.Item ref={(el) => setCheckbox1(el)}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox2(el)}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox3(el)}>Box 3</Checkboxes.Item>
        </Checkboxes>

        {[
          { name: 'Box 1', el: checkbox1 },
          { name: 'Box 2', el: checkbox2 },
          { name: 'Box 3', el: checkbox3 },
        ].map(({ name, el }) => (
          <SummaryList key={name}>
            <SummaryList.Row>
              <SummaryList.Key>Label</SummaryList.Key>
              <SummaryList.Value>
                <samp>{name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row>
              <SummaryList.Key>Name</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row noBorder>
              <SummaryList.Key>ID</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.id}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
          </SummaryList>
        ))}
      </>
    );
  },
};

export const IDPrefixSupplied: Story = {
  name: 'Checkboxes with ID prefix supplied',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function IDPrefixSuppliedRender() {
    const [checkbox1, setCheckbox1] = useState<HTMLInputElement | null>(null);
    const [checkbox2, setCheckbox2] = useState<HTMLInputElement | null>(null);
    const [checkbox3, setCheckbox3] = useState<HTMLInputElement | null>(null);

    return (
      <>
        <ul className="nhsuk-list nhsuk-list--bullet">
          <li>Checkboxes are selectable via their labels</li>
          <li>Checkboxes are assigned IDs according to the ID prefix</li>
          <li>Checkboxes are assigned randomly generated names</li>
        </ul>

        <hr />

        <Checkboxes idPrefix="idprefix">
          <Checkboxes.Item ref={(el) => setCheckbox1(el)}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox2(el)}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox3(el)}>Box 3</Checkboxes.Item>
        </Checkboxes>

        {[
          { name: 'Box 1', el: checkbox1 },
          { name: 'Box 2', el: checkbox2 },
          { name: 'Box 3', el: checkbox3 },
        ].map(({ name, el }) => (
          <SummaryList key={name}>
            <SummaryList.Row>
              <SummaryList.Key>Label</SummaryList.Key>
              <SummaryList.Value>
                <samp>{name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row>
              <SummaryList.Key>Name</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row noBorder>
              <SummaryList.Key>ID</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.id}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
          </SummaryList>
        ))}
      </>
    );
  },
};

export const IDPrefixAndNameSupplied: Story = {
  name: 'Checkboxes with ID prefix and name supplied',
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function IDPrefixAndNameSuppliedRender() {
    const [checkbox1, setCheckbox1] = useState<HTMLInputElement | null>(null);
    const [checkbox2, setCheckbox2] = useState<HTMLInputElement | null>(null);
    const [checkbox3, setCheckbox3] = useState<HTMLInputElement | null>(null);

    return (
      <>
        <ul className="nhsuk-list nhsuk-list--bullet">
          <li>Checkboxes are selectable via their labels</li>
          <li>Checkboxes are assigned IDs according to the ID prefix</li>
          <li>Checkboxes have the same name as the checkboxes component</li>
        </ul>

        <hr />

        <Checkboxes idPrefix="idprefix-name" name="testname">
          <Checkboxes.Item ref={(el) => setCheckbox1(el)}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox2(el)}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={(el) => setCheckbox3(el)}>Box 3</Checkboxes.Item>
        </Checkboxes>

        {[
          { name: 'Box 1', el: checkbox1 },
          { name: 'Box 2', el: checkbox2 },
          { name: 'Box 3', el: checkbox3 },
        ].map(({ name, el }) => (
          <SummaryList key={name}>
            <SummaryList.Row>
              <SummaryList.Key>Label</SummaryList.Key>
              <SummaryList.Value>
                <samp>{name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row>
              <SummaryList.Key>Name</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.name}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row noBorder>
              <SummaryList.Key>ID</SummaryList.Key>
              <SummaryList.Value>
                <samp>{el?.id}</samp>
              </SummaryList.Value>
            </SummaryList.Row>
          </SummaryList>
        ))}
      </>
    );
  },
};

export const OnChangeHandler: Story = {
  name: 'Checkboxes change handler',
  args: {
    name: 'change-handler',
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: function OnChangeHandlerRender(args) {
    const [values, setValues] = useState<Set<string>>(new Set());

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const updated = new Set(values);

      if (target.checked) {
        updated.add(target.value);
      } else {
        updated.delete(target.value);
      }

      setValues(updated);
    };

    return (
      <>
        <Checkboxes onChange={handleChange} {...args}>
          <Checkboxes.Item value="1">Box 1</Checkboxes.Item>
          <Checkboxes.Item value="2">Box 2</Checkboxes.Item>
          <Checkboxes.Item value="3">Box 3</Checkboxes.Item>
        </Checkboxes>

        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Values</SummaryList.Key>
            <SummaryList.Value>
              <samp>{values.size ? [...values].join(', ') : 'None'}</samp>
            </SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </>
    );
  },
};
