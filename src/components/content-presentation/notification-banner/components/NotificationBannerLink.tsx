import classNames from 'classnames';
import { forwardRef } from 'react';

import type { AsElementLink } from '#util/types/index.js';

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
