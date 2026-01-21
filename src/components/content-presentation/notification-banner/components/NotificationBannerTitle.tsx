import type { FC } from 'react';

import { Heading, type HeadingProps } from '#components/typography/Heading.js';

export interface NotificationBannerTitleProps extends HeadingProps {
  success?: boolean;
}

export const NotificationBannerTitle: FC<NotificationBannerTitleProps> = ({
  children,
  headingLevel = 'h2',
  id = 'nhsuk-notification-banner-title',
  success,
  ...rest
}) => (
  <Heading
    className="nhsuk-notification-banner__title"
    headingLevel={headingLevel}
    id={id}
    {...rest}
  >
    {children || (success ? 'Success' : 'Important')}
  </Heading>
);

NotificationBannerTitle.displayName = 'NotificationBanner.Title';
