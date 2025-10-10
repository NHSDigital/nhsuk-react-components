import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';
import type { FC } from 'react';

export interface NotificationBannerTitleProps extends HeadingLevelProps {
  success?: boolean;
}

export const NotificationBannerTitle: FC<NotificationBannerTitleProps> = ({
  children,
  headingLevel = 'h2',
  id = 'nhsuk-notification-banner-title',
  success,
  ...rest
}) => (
  <div className="nhsuk-notification-banner__header">
    <HeadingLevel
      className="nhsuk-notification-banner__title"
      headingLevel={headingLevel}
      id={id}
      {...rest}
    >
      {children || (success ? 'Success' : 'Important')}
    </HeadingLevel>
  </div>
);

NotificationBannerTitle.displayName = 'NotificationBanner.Title';
