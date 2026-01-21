import { render } from '@testing-library/react';
import { createRef } from 'react';

import { Panel, type PanelTitleProps } from '..';

import { renderClient, renderServer } from '#util/components';

describe('Panel', () => {
  const Example = (props: Parameters<typeof Panel>[0]) => (
    <Panel {...props}>
      <Panel.Title>Booking complete</Panel.Title>
      We have sent you a confirmation email
    </Panel>
  );

  const ExampleInterruption = (props: Parameters<typeof Panel>[0]) => (
    <Panel interruption {...props}>
      <Panel.Title size="l">Jodie Brown had a COVID-19 vaccine less than 3 months ago</Panel.Title>
      <p>They had a COVID-19 vaccine on 25 September 2025.</p>
      <p>
        For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.
      </p>
    </Panel>
  );

  it('matches snapshot', async () => {
    const { container } = await renderClient(<Example />, {
      className: 'nhsuk-panel',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(<Example />, {
      className: 'nhsuk-panel',
    });

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-panel',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('matches snapshot as interruption panel', async () => {
    const { container } = await renderClient(<ExampleInterruption />, {
      className: 'nhsuk-panel',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot as interruption panel (via server)', async () => {
    const { container, element } = await renderServer(<ExampleInterruption />, {
      className: 'nhsuk-panel',
    });

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-panel',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const ref = createRef<HTMLDivElement>();

    const { modules } = await renderClient(<Example ref={ref} />, {
      className: 'nhsuk-panel',
    });

    const [panelEl] = modules;

    expect(ref.current).toBe(panelEl);
    expect(ref.current).toHaveClass('nhsuk-panel');
  });

  describe('Panel.Title', () => {
    it.each<PanelTitleProps>([
      { headingLevel: 'h1' },
      { headingLevel: 'h2' },
      { headingLevel: 'h3' },
      { headingLevel: 'h4' },
    ])('renders with custom heading level $headingLevel', (props) => {
      const { container } = render(<Panel.Title {...props}>Booking complete</Panel.Title>);

      const title = container.querySelector('.nhsuk-panel__title');

      expect(title).toHaveProperty('tagName', props.headingLevel?.toUpperCase());
    });

    it.each<PanelTitleProps['size']>(['m', 'l', 'xl'])('renders with custom size %s', (size) => {
      const { container } = render(
        <Panel.Title size={size}>
          Jodie Brown had a COVID-19 vaccine less than 3 months ago
        </Panel.Title>,
      );

      const title = container.querySelector('.nhsuk-panel__title');

      expect(title).toHaveClass(`nhsuk-panel__title--${size}`);
    });
  });
});
