import type { AsElementLink } from '#util/types/index.js';
import { forwardRef } from 'react';
import classNames from 'classnames';

export type NotificationBannerLinkProps = AsElementLink<HTMLAnchorElement>;

export const NotificationBannerLink = forwardRef<HTMLAnchorElement, NotificationBannerLinkProps>(
  ({ children, className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element
      className={classNames('nhsuk-notification-banner__link', className)}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Element>
  ),
);

NotificationBannerLink.displayName = 'NotificationBanner.Link';
