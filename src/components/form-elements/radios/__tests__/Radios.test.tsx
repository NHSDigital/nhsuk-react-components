import { createRef } from 'react';

import { Radios } from '..';

import { renderClient, renderServer } from '#util/components';

describe('Radios', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Radios id="example" name="example">
        <Radios.Item id="example-1" value="yes">
          Yes
        </Radios.Item>
        <Radios.Item id="example-2" value="no">
          No
        </Radios.Item>
      </Radios>,
      { moduleName: 'nhsuk-radios' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Radios id="example" name="example">
        <Radios.Item id="example-1" value="yes">
          Yes
        </Radios.Item>
        <Radios.Item id="example-2" value="no">
          No
        </Radios.Item>
      </Radios>,
      { moduleName: 'nhsuk-radios' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-radios',
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
      <Radios formGroupProps={{ ref: groupRef }} ref={moduleRef}>
        <Radios.Item ref={fieldRef}>Yes</Radios.Item>
      </Radios>,
      { moduleName: 'nhsuk-radios' },
    );

    const groupEl = container.querySelectorAll('div')[0];
    const moduleEl = container.querySelectorAll('div')[1];
    const inputEl = container.querySelector('input');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(moduleRef.current).toBe(moduleEl);
    expect(moduleRef.current).toHaveClass('nhsuk-radios');

    expect(fieldRef.current).toBe(inputEl);
    expect(fieldRef.current).toHaveClass('nhsuk-radios__input');
  });

  it('does not render the conditional content if checked is false', async () => {
    const { container } = await renderClient(
      <Radios id="example" name="example">
        <Radios.Item
          id="example-1"
          value="yes"
          checked={false}
          conditional={<p className="conditional-test">Test</p>}
        >
          Yes
        </Radios.Item>
        <Radios.Item id="example-2" value="no">
          No
        </Radios.Item>
      </Radios>,
      { moduleName: 'nhsuk-radios' },
    );

    const conditionalElement = container.querySelector('.conditional-test');
    expect(conditionalElement?.parentElement).toHaveClass('nhsuk-radios__conditional--hidden');
  });

  it('renders the conditional content if the radio reference = selected radio', async () => {
    const { container } = await renderClient(
      <Radios id="example" name="example">
        <Radios.Item
          id="example-1"
          value="yes"
          checked={true}
          conditional={<p className="conditional-test">Test</p>}
        >
          Yes
        </Radios.Item>
        <Radios.Item id="example-2" value="no">
          No
        </Radios.Item>
      </Radios>,
      { moduleName: 'nhsuk-radios' },
    );

    const conditionalElement = container.querySelector('.conditional-test');
    expect(conditionalElement).toHaveTextContent('Test');
  });
});
