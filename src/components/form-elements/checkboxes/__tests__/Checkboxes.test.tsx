import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Checkboxes } from '..';
import { renderClient, renderServer } from '#util/components';

describe('Checkboxes', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error message', async () => {
    const { container } = await renderClient(
      <Checkboxes id="example" name="example" error="Example error">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with an exclusive checkbox', async () => {
    const { container } = await renderClient(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" id="none" exclusive>
          None
        </Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
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

  it('sets data-exclusive attribute when exclusive is true for a checkbox', async () => {
    const { container } = await renderClient(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        <Checkboxes.Item value="none" id="none" exclusive>
          None
        </Checkboxes.Item>
      </Checkboxes>,
      { moduleName: 'nhsuk-checkboxes' },
    );

    const inputEl = container.querySelector<HTMLInputElement>('#none');

    expect(inputEl?.dataset).toHaveProperty('checkboxExclusive', 'true');
  });

  it('allows HTML on the Checkboxes props', async () => {
    const { container } = await render(
      <Checkboxes
        id="example"
        name="example"
        hint={
          <>
            This is the main hint <span className="nhsuk-caption-xl"> and contains HTML</span>
          </>
        }
        error={
          <>
            This is an error <span className="nhsuk-caption-m"> and this error contains HTML</span>
          </>
        }
      >
        <Checkboxes.Item
          value="animal"
          hint={
            <>
              This is informative <span className="nhsuk-caption-l"> and contains HTML</span>
            </>
          }
        >
          Waste from animal carcasses
        </Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        <Checkboxes.Item value="none" id="none" exclusive>
          None
        </Checkboxes.Item>
      </Checkboxes>,
    );

    const hintEl = container.querySelector('#example-1--hint');
    expect(hintEl).toBeDefined();
    expect(hintEl?.innerHTML).toMatch(
      `This is informative <span class="nhsuk-caption-l"> and contains HTML</span>`,
    );

    const mainHintEl = container.querySelector('#example--hint');
    expect(mainHintEl).toBeDefined();
    expect(mainHintEl?.innerHTML).toMatch(
      `This is the main hint <span class="nhsuk-caption-xl"> and contains HTML</span>`,
    );

    const hintElSpan = container.querySelector('.nhsuk-caption-xl');
    expect(hintElSpan).toHaveTextContent('and contains HTML');
    expect(hintEl).toBeDefined();
    expect(hintEl?.innerHTML).toMatch(
      `This is informative <span class="nhsuk-caption-l"> and contains HTML</span>`,
    );
    const errorEl = container.querySelector('#example--error-message');
    expect(errorEl).toBeDefined();
    expect(errorEl).toHaveTextContent('and this error contains HTML');
  });
});
