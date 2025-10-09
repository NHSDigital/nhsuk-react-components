import { renderClient, renderServer } from '#util/components';
import { NotificationBanner } from '#components/content-presentation/notification-banner';

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
      <NotificationBanner title={'Upcoming Maintenance'}>
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
          <NotificationBanner.Link href={'#'}>View application</NotificationBanner.Link>.
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
          <NotificationBanner.Link href={'#'}>example@department.nhs.uk</NotificationBanner.Link> if
          you think there&#39;s a problem.
        </p>
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
      <NotificationBanner title={'Upcoming Maintenance'}>
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
          <NotificationBanner.Link href={'#'}>View application</NotificationBanner.Link>.
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
          <NotificationBanner.Link href={'#'}>example@department.nhs.uk</NotificationBanner.Link> if
          you think there&#39;s a problem.
        </p>
      </NotificationBanner>,
      { className: 'nhsuk-notification-banner' },
    );

    expect(container).toMatchSnapshot();
  });
});
