'use client';

import type { FC } from 'react';

import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

export type NotificationBannerHeadingProps = HeadingLevelProps;

export const NotificationBannerHeading: FC<NotificationBannerHeadingProps> = ({
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

NotificationBannerHeading.displayName = 'NotificationBanner.Heading';
