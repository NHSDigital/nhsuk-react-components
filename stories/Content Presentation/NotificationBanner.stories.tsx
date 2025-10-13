import { type Meta, type StoryObj } from '@storybook/react-vite';
import { NotificationBanner } from '#components';
import { NotificationBannerLink } from '#components/content-presentation/notification-banner/components';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/notification-banner" target="_blank">here</a>.
 *
 * ## Implementation Notes
 *
 * The `NotificationBanner` component has three subcomponents:
 *
 * - `NotificationBanner.Title`
 * - `NotificationBanner.Heading`
 * - `NotificationBanner.Link`
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { NotificationBanner } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <NotificationBanner>
 *             <NotificationBanner.Heading>Patient record updated</Details.Summary>
 *             <p>
 *                 Contact <NotificationBanner.Link href="#">example@department.nhs.uk</NotificationBanner.Link> if you think there&#39;s a problem.
 *             </p>
 *         </NotificationBanner>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof NotificationBanner> = {
  title: 'Content Presentation/Notification Banner',
  component: NotificationBanner,
};
export default meta;
type Story = StoryObj<typeof NotificationBanner>;

export const StandardPanel: Story = {
  args: {},
  render: () => (
    <NotificationBanner>
      <NotificationBanner.Heading>
        The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
      </NotificationBanner.Heading>
    </NotificationBanner>
  ),
};

export const SuccessPanel: Story = {
  args: {},
  render: () => (
    <NotificationBanner success>
      <NotificationBanner.Heading>Patient record updated</NotificationBanner.Heading>
      <p>
        Contact{' '}
        <NotificationBanner.Link href="#">example@department.nhs.uk</NotificationBanner.Link> if you
        think there&#39;s a problem.
      </p>
    </NotificationBanner>
  ),
};

export const StandardPanelWithLink: Story = {
  args: {},
  render: () => (
    <NotificationBanner>
      <NotificationBanner.Heading>
        You have 7 days left to send your application.{' '}
        <NotificationBanner.Link href="#">View application</NotificationBanner.Link>.
      </NotificationBanner.Heading>
    </NotificationBanner>
  ),
};

export const StandardPanelWithCustomTitle: Story = {
  args: {
    title: 'Important Message',
  },
  render: () => (
    <NotificationBanner>
      <NotificationBanner.Heading>Upcoming maintenance</NotificationBanner.Heading>
      <p>The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.</p>
    </NotificationBanner>
  ),
};

export const StandardPanelWithCustomTitleElement: Story = {
  args: {},
  render: () => (
    <NotificationBanner>
      <NotificationBanner.Title>
        Maintenance <time dateTime={'2025-01-01'}>January 1</time>
      </NotificationBanner.Title>
      <NotificationBanner.Heading>Upcoming maintenance</NotificationBanner.Heading>
      <p>The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.</p>
    </NotificationBanner>
  ),
};

export const StandardPanelWithList: Story = {
  args: {},
  render: () => (
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
    </NotificationBanner>
  ),
};

export const StandardPanelWithLotsOfContent: Story = {
  args: {},
  render: () => (
    <NotificationBanner>
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
