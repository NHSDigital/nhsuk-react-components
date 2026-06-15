import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { NotificationBannerLink } from '#components/content-presentation/notification-banner/components/index.js';
import { NotificationBanner } from '#components/content-presentation/notification-banner/index.js';

const meta: Meta<typeof NotificationBanner> = {
  title: 'Content Presentation/Notification banner',
  component: NotificationBanner,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the notification banner component and when to use it, visit the
          [design system in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/notification-banners) for
          guidance, examples and options.
        </Markdown>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationBanner>;

export const Default: Story = {
  name: 'Notification banner default',
  render: (args) => (
    <NotificationBanner {...args}>
      <NotificationBanner.Heading>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner.Heading>
    </NotificationBanner>
  ),
};

export const Success: Story = {
  name: 'Notification banner success',
  args: {
    success: true,
  },
  render: (args) => (
    <NotificationBanner {...args}>
      <NotificationBanner.Heading>Patient record updated</NotificationBanner.Heading>
      <p>
        Contact{' '}
        <NotificationBanner.Link href="#">example@department.nhs.uk</NotificationBanner.Link> if you
        think there&#39;s a problem.
      </p>
    </NotificationBanner>
  ),
};

export const WithLink: Story = {
  name: 'Notification banner with link',
  render: (args) => (
    <NotificationBanner {...args}>
      <NotificationBanner.Heading>
        You have 7 days left to send your application.{' '}
        <NotificationBanner.Link href="#">View application</NotificationBanner.Link>.
      </NotificationBanner.Heading>
    </NotificationBanner>
  ),
};

export const WithCustomTitle: Story = {
  name: 'Notification banner with custom title',
  args: {
    title: 'Important Message',
  },
  render: (args) => (
    <NotificationBanner {...args}>
      <NotificationBanner.Heading>Upcoming maintenance</NotificationBanner.Heading>
      <p>The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.</p>
    </NotificationBanner>
  ),
};

export const WithCustomTitleElement: Story = {
  name: 'Notification banner with custom title element',
  render: (args) => (
    <NotificationBanner {...args}>
      <NotificationBanner.Title>
        Maintenance <time dateTime="2025-01-01">January 1</time>
      </NotificationBanner.Title>
      <NotificationBanner.Heading>Upcoming maintenance</NotificationBanner.Heading>
      <p>The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.</p>
    </NotificationBanner>
  ),
};

export const WithList: Story = {
  name: 'Notification banner with list',
  render: (args) => (
    <NotificationBanner {...args}>
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
    </NotificationBanner>
  ),
};

export const WithLotsOfContent: Story = {
  name: 'Notification banner with lots of content',
  render: (args) => (
    <NotificationBanner {...args}>
      <NotificationBanner.Heading>
        Check if you need to apply the reverse charge to this application
      </NotificationBanner.Heading>
      <p>
        You will have to apply the{' '}
        <NotificationBanner.Link href="#">reverse charge</NotificationBanner.Link> if the applicant
        supplies any of these services:
      </p>
      <ul>
        <li>
          constructing, altering, repairing, extending, demolishing or dismantling buildings or
          structures (whether permanent or not), including offshore installation services
        </li>
        <li>
          constructing, altering, repairing, extending, demolishing of any works forming, or planned
          to form, part of the land, including (in particular) walls, roadworks, power lines,
          electronic communications equipment, aircraft runways, railways, inland waterways, docks
          and harbours
        </li>
      </ul>
    </NotificationBanner>
  ),
};
