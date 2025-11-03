import type { FC } from 'react';

import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

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
  <HeadingLevel
    className="nhsuk-notification-banner__title"
    headingLevel={headingLevel}
    id={id}
    {...rest}
  >
    {children || (success ? 'Success' : 'Important')}
  </HeadingLevel>
);

NotificationBannerTitle.displayName = 'NotificationBanner.Title';
