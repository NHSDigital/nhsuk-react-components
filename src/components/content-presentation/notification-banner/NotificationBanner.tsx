import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';
import { HeadingLevel } from '#components/utils/HeadingLevel.js';
import { NotificationBannerHeading, NotificationBannerLink } from './components/index.js';

export interface NotificationBannerProps extends ComponentPropsWithoutRef<'div'> {
  success?: boolean;
}

const NotificationBannerComponent = forwardRef<HTMLDivElement, NotificationBannerProps>(
  ({ children, className, title, success, ...rest }, forwardedRef) => {
    return (
      <section
        className={classNames(
          'nhsuk-notification-banner',
          { 'nhsuk-notification-banner--success': success },
          className,
        )}
        aria-labelledby="nhsuk-notification-banner-title"
        data-module="nhsuk-notification-banner"
      >
        <div className="nhsuk-notification-banner__header">
          <HeadingLevel
            className="nhsuk-notification-banner__title"
            headingLevel={'h2'}
            id="nhsuk-notification-banner-title"
          >
            {title || (success ? 'Success' : 'Important')}
          </HeadingLevel>
        </div>
        <div className={'nhsuk-notification-banner__content'} ref={forwardedRef} {...rest}>
          {children}
        </div>
      </section>
    );
  },
);

NotificationBannerComponent.displayName = 'NotificationBanner';

export const NotificationBanner = Object.assign(NotificationBannerComponent, {
  Heading: NotificationBannerHeading,
  Link: NotificationBannerLink,
});
