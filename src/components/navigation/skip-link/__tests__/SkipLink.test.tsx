import React, { createRef } from 'react';
import { Container } from '@components/layout';
import { waitFor } from '@testing-library/react';
import { renderClient, renderServer } from '@util/components';
import SkipLink from '../';

describe('SkipLink', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <>
        <SkipLink />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
      { moduleName: 'nhsuk-skip-link' },
    );

    expect(container).toMatchSnapshot('SkipLink');
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <>
        <SkipLink />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
      { moduleName: 'nhsuk-skip-link' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-skip-link',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const ref = createRef<HTMLAnchorElement>();

    const { modules } = await renderClient(
      <>
        <SkipLink ref={ref} />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
      { moduleName: 'nhsuk-skip-link' },
    );

    const [skipLinkEl] = modules;

    expect(ref.current).toBe(skipLinkEl);
    expect(ref.current).toHaveClass('nhsuk-skip-link');
  });

  it('sets the href to #maincontent by default', async () => {
    const { modules } = await renderClient(
      <>
        <SkipLink />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
      { moduleName: 'nhsuk-skip-link' },
    );

    const [skipLinkEl] = modules;

    expect(skipLinkEl).toHaveAttribute('href', '#maincontent');
    expect(skipLinkEl).toHaveClass('nhsuk-skip-link');
  });

  it('focuses the main content when clicked', async () => {
    const { container, modules } = await renderClient(
      <>
        <SkipLink />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
      { moduleName: 'nhsuk-skip-link' },
    );

    const [skipLinkEl] = modules;

    skipLinkEl.click();

    const mainEl = container.querySelector('main');
    await waitFor(() => expect(document.activeElement).toBe(mainEl));
  });
});
