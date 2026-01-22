'use client';

import { type FC } from 'react';

import { Heading, type HeadingProps } from '#components/typography/Heading.js';

export type NotificationBannerHeadingProps = HeadingProps;

export const NotificationBannerHeading: FC<NotificationBannerHeadingProps> = ({
  children,
  headingLevel = 'h3',
  ...rest
}) => (
  <Heading className="nhsuk-notification-banner__heading" headingLevel={headingLevel} {...rest}>
    {children}
  </Heading>
);

NotificationBannerHeading.displayName = 'NotificationBanner.Heading';
