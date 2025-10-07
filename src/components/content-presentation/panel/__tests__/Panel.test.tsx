import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Panel, type PanelTitleProps } from '..';
import { renderClient, renderServer } from '#util/components';

describe('Panel', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Panel>
        <Panel.Title>Booking complete</Panel.Title>
        We have sent you a confirmation email
      </Panel>,
      { className: 'nhsuk-panel' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Panel>
        <Panel.Title>Booking complete</Panel.Title>
        We have sent you a confirmation email
      </Panel>,
      { className: 'nhsuk-panel' },
    );

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

    const { modules } = await renderClient(
      <Panel ref={ref}>
        <Panel.Title>Booking complete</Panel.Title>
        We have sent you a confirmation email
      </Panel>,
      { className: 'nhsuk-panel' },
    );

    const [panelEl] = modules;

    expect(ref.current).toBe(panelEl);
    expect(ref.current).toHaveClass('nhsuk-panel');
  });

  it.each<PanelTitleProps | undefined>([
    undefined,
    { headingLevel: 'h1' },
    { headingLevel: 'h2' },
    { headingLevel: 'h3' },
    { headingLevel: 'h4' },
  ])('renders heading level $headingLevel if specified', (props) => {
    const { container } = render(
      <Panel>
        <Panel.Title {...props}>Booking complete</Panel.Title>
        We have sent you a confirmation email
      </Panel>,
    );

    const title = container.querySelector('.nhsuk-panel__title');

    expect(title).toHaveProperty('tagName', props?.headingLevel?.toUpperCase() ?? 'H1');
  });
});
