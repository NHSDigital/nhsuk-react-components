import { renderClient, renderServer } from '#util/components';
import { NotificationBanner } from '#components/content-presentation/notification-banner';
import { createRef } from 'react';
import { NotificationBannerLink } from '#components/content-presentation/notification-banner/components';

describe('NotificationBanner', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        <NotificationBanner.Heading>
          The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot success', async () => {
    const { container } = await renderClient(
      <NotificationBanner success>
        <NotificationBanner.Heading>Patient record updated</NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot custom title', async () => {
    const { container } = await renderClient(
      <NotificationBanner title={'Upcoming maintenance'}>
        <NotificationBanner.Heading>
          The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot custom title html', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        <NotificationBanner.Title>
          <strong>Very</strong> important information
        </NotificationBanner.Title>
        <NotificationBanner.Heading>
          The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with link in heading', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        <NotificationBanner.Heading>
          You have 7 days left to send your application.{' '}
          <NotificationBanner.Link href="#">View application</NotificationBanner.Link>.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with link in body', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        <NotificationBanner.Heading>Patient record updated</NotificationBanner.Heading>
        <p>
          Contact{' '}
          <NotificationBanner.Link href="#">example@department.nhs.uk</NotificationBanner.Link> if
          you think there&#39;s a problem.
        </p>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with no sub elements', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with list', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        <NotificationBanner.Heading>4 files uploaded</NotificationBanner.Heading>
        <ul>
          <li>
            <NotificationBannerLink>government-strategy.pdf</NotificationBannerLink>
          </li>
          <li>
            <NotificationBannerLink>government-strategy-v2.pdf</NotificationBannerLink>
          </li>
          <li>
            <NotificationBannerLink>government-strategy-v3-FINAL.pdf</NotificationBannerLink>
          </li>
          <li>
            <NotificationBannerLink>government-strategy-v4-FINAL-v2.pdf</NotificationBannerLink>
          </li>
        </ul>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with long heading', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        <NotificationBanner.Heading>
          The patient record was withdrawn on 7 March 2014, before being sent in, sent back,
          queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft
          peat for three months and recycled as firelighters.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with lots of content', async () => {
    const { container } = await renderClient(
      <NotificationBanner>
        <NotificationBanner.Heading>
          Check if you need to apply the reverse charge to this application
        </NotificationBanner.Heading>
        <p>
          You will have to apply the{' '}
          <NotificationBanner.Link href="#">reverse charge</NotificationBanner.Link> if the
          applicant supplies any of these services:
        </p>
        <ul>
          <li>
            constructing, altering, repairing, extending, demolishing or dismantling buildings or
            structures (whether permanent or not), including offshore installation services
          </li>
          <li>
            constructing, altering, repairing, extending, demolishing of any works forming, or
            planned to form, part of the land, including (in particular) walls, roadworks, power
            lines, electronic communications equipment, aircraft runways, railways, inland
            waterways, docks and harbours
          </li>
        </ul>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        <NotificationBanner.Heading>
          The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot success (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner success>
        <NotificationBanner.Heading>Patient record updated</NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot custom title (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner title={'Upcoming maintenance'}>
        <NotificationBanner.Heading>
          The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot custom title html (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        <NotificationBanner.Title id={'custom-title'}>
          <strong>Very</strong> important information
        </NotificationBanner.Title>
        <NotificationBanner.Heading>
          The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with link in heading (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        <NotificationBanner.Heading>
          You have 7 days left to send your application.{' '}
          <NotificationBanner.Link href="#">View application</NotificationBanner.Link>.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with link in body (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        <NotificationBanner.Heading>Patient record updated</NotificationBanner.Heading>
        <p>
          Contact{' '}
          <NotificationBanner.Link href="#">example@department.nhs.uk</NotificationBanner.Link> if
          you think there&#39;s a problem.
        </p>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with no sub elements (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with list (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        <NotificationBanner.Heading>4 files uploaded</NotificationBanner.Heading>
        <ul>
          <li>
            <NotificationBannerLink>file.pdf</NotificationBannerLink>
          </li>
          <li>
            <NotificationBannerLink>file-v2.pdf</NotificationBannerLink>
          </li>
          <li>
            <NotificationBannerLink>file-v3-FINAL.pdf</NotificationBannerLink>
          </li>
          <li>
            <NotificationBannerLink>file-v4-FINAL-v2.pdf</NotificationBannerLink>
          </li>
        </ul>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with long heading (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        <NotificationBanner.Heading>
          The patient record was withdrawn on 7 March 2014, before being sent in, sent back,
          queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft
          peat for three months and recycled as firelighters.
        </NotificationBanner.Heading>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with lots of content (via server)', async () => {
    const { container } = await renderServer(
      <NotificationBanner>
        <NotificationBanner.Heading>
          Check if you need to apply the reverse charge to this application
        </NotificationBanner.Heading>
        <p>
          You will have to apply the{' '}
          <NotificationBanner.Link href="#">reverse charge</NotificationBanner.Link> if the
          applicant supplies any of these services:
        </p>
        <ul>
          <li>
            constructing, altering, repairing, extending, demolishing or dismantling buildings or
            structures (whether permanent or not), including offshore installation services
          </li>
          <li>
            constructing, altering, repairing, extending, demolishing of any works forming, or
            planned to form, part of the land, including (in particular) walls, roadworks, power
            lines, electronic communications equipment, aircraft runways, railways, inland
            waterways, docks and harbours
          </li>
        </ul>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', async () => {
    const ref = createRef<HTMLDivElement>();

    const { modules } = await renderClient(
      <NotificationBanner ref={ref}>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    const [notificationBannerEl] = modules;

    expect(ref.current).toBe(notificationBannerEl);
    expect(ref.current).toHaveClass('nhsuk-notification-banner');
  });

  it('has default role and autofocus', async () => {
    const { modules } = await renderClient(
      <NotificationBanner>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    const [notificationBannerEl] = modules;

    expect(notificationBannerEl?.getAttribute('role')).toBe('region');
    expect(notificationBannerEl?.dataset?.disableAutoFocus).toBe(undefined);
  });

  it('has alert role', async () => {
    const { modules } = await renderClient(
      <NotificationBanner success>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    const [notificationBannerEl] = modules;

    expect(notificationBannerEl?.getAttribute('role')).toBe('alert');
  });

  it('has disabled autofocus', async () => {
    const { modules } = await renderClient(
      <NotificationBanner disableAutoFocus>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    const [notificationBannerEl] = modules;

    expect(notificationBannerEl?.dataset?.disableAutoFocus).toBe('true');
  });
});
