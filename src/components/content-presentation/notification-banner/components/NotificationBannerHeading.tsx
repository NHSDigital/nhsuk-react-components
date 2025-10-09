import { HeadingLevel, type HeadingLevelProps } from '#components';
import type { FC } from 'react';

export type NotificationBannerHeadingProps = HeadingLevelProps;

const NotificationBannerHeadingComponent: FC<NotificationBannerHeadingProps> = ({
  children,
  headingLevel = 'h3',
  ...rest
}) => (
  <HeadingLevel
    className="nhsuk-notification-banner__heading"
    headingLevel={headingLevel}
    {...rest}
  >
    {children}
  </HeadingLevel>
);

NotificationBannerHeadingComponent.displayName = 'NotificationBanner.Heading';

export const NotificationBannerHeading = Object.assign(NotificationBannerHeadingComponent);
