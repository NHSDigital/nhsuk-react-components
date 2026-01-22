import { createRef } from 'react';

import { Checkboxes } from '..';

import { renderClient, renderServer } from '#util/components';

describe('Checkboxes', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Checkboxes
        legend="How do you want to be contacted about this?"
        legendProps={{ size: 'l' }}
        hint="Select all options that are relevant to you"
        id="example"
        name="example"
      >
        <Checkboxes.Item value="email">Email</Checkboxes.Item>
        <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
        <Checkboxes.Item value="text">Text message</Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error message', async () => {
    const { container } = await renderClient(
      <Checkboxes
        legend="How do you want to be contacted about this?"
        legendProps={{ size: 'l' }}
        hint="Select all options that are relevant to you"
        error="Example error"
        id="example"
        name="example"
      >
        <Checkboxes.Item value="email">Email</Checkboxes.Item>
        <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
        <Checkboxes.Item value="text">Text message</Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with HTML in props', async () => {
    const { container } = await renderClient(
      <Checkboxes
        legend={
          <>
            <span className="nhsuk-caption-l">Example</span> Legend text
          </>
        }
        legendProps={{
          isPageHeading: true,
          size: 'l',
        }}
        hint={
          <>
            Hint text <em>with HTML</em>
          </>
        }
        error={
          <>
            Error text <em>with HTML</em>
          </>
        }
        id="example"
        name="example"
      >
        <Checkboxes.Item
          value="animal"
          hint={
            <>
              Item hint text <em>with HTML</em>
            </>
          }
        >
          Waste from animal carcasses
        </Checkboxes.Item>
        <Checkboxes.Item value="email">Email</Checkboxes.Item>
        <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
        <Checkboxes.Item value="text">Text message</Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with an exclusive checkbox', async () => {
    const { container } = await renderClient(
      <Checkboxes
        legend="How do you want to be contacted about this?"
        legendProps={{ size: 'l' }}
        hint="Select all options that are relevant to you"
        id="example"
        name="example"
      >
        <Checkboxes.Item value="email">Email</Checkboxes.Item>
        <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
        <Checkboxes.Item value="text">Text message</Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" exclusive>
          None
        </Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with an exclusive checkbox and named groups', async () => {
    const { container } = await renderClient(
      <Checkboxes
        legend="How do you want to be contacted about this?"
        legendProps={{ size: 'l' }}
        hint="Select all options that are relevant to you"
        id="example"
        name="example"
      >
        <Checkboxes.Item value="email" exclusiveGroup="communication-preferences">
          Email
        </Checkboxes.Item>
        <Checkboxes.Item value="phone" exclusiveGroup="communication-preferences">
          Phone
        </Checkboxes.Item>
        <Checkboxes.Item value="text" exclusiveGroup="communication-preferences">
          Text message
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" exclusiveGroup="communication-preferences" exclusive>
          None of the above
        </Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Checkboxes
        legend="How do you want to be contacted about this?"
        legendProps={{ size: 'l' }}
        hint="Select all options that are relevant to you"
        id="example"
        name="example"
      >
        <Checkboxes.Item value="email">Email</Checkboxes.Item>
        <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
        <Checkboxes.Item value="text">Text message</Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-checkboxes',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const groupRef = createRef<HTMLDivElement>();
    const moduleRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLInputElement>();

    const { container } = await renderClient(
      <Checkboxes formGroupProps={{ ref: groupRef }} ref={moduleRef}>
        <Checkboxes.Item ref={fieldRef}>Yes</Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    const groupEl = container.querySelectorAll('div')[0];
    const moduleEl = container.querySelectorAll('div')[1];
    const inputEl = container.querySelector('input');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(moduleRef.current).toBe(moduleEl);
    expect(moduleRef.current).toHaveClass('nhsuk-checkboxes');

    expect(fieldRef.current).toBe(inputEl);
    expect(fieldRef.current).toHaveClass('nhsuk-checkboxes__input');
  });

  it('sets attribute `data-checkbox-exclusive` when items are exclusive', async () => {
    const { container } = await renderClient(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="text">Text message</Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" exclusive>
          None of the above
        </Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    const inputEl1 = container.querySelector<HTMLInputElement>('#example-1');
    const inputEl2 = container.querySelector<HTMLInputElement>('#example-2');

    expect(inputEl1?.dataset).not.toHaveProperty('checkboxExclusive');
    expect(inputEl2?.dataset).toHaveProperty('checkboxExclusive', 'true');
  });

  it('sets attribute `data-checkbox-exclusive-group` when items have exclusive groups', async () => {
    const { container } = await renderClient(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="text" exclusiveGroup="communication-preferences">
          Text message
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" exclusiveGroup="communication-preferences" exclusive>
          None of the above
        </Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    const inputEl1 = container.querySelector<HTMLInputElement>('#example-1');
    const inputEl2 = container.querySelector<HTMLInputElement>('#example-2');

    expect(inputEl1?.dataset).not.toHaveProperty('checkboxExclusive');
    expect(inputEl1?.dataset).toHaveProperty('checkboxExclusiveGroup', 'communication-preferences');
    expect(inputEl2?.dataset).toHaveProperty('checkboxExclusive', 'true');
    expect(inputEl2?.dataset).toHaveProperty('checkboxExclusiveGroup', 'communication-preferences');
  });
});
