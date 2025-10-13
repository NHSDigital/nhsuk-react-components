'use client';

import {
  Children,
  createRef,
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import classNames from 'classnames';
import {
  NotificationBannerHeading,
  NotificationBannerLink,
  NotificationBannerTitle,
} from './components/index.js';
import { type NotificationBanner as NotificationBannerModule } from 'nhsuk-frontend';
import { childIsOfComponentType } from '#util/types/TypeGuards.js';

export interface NotificationBannerProps extends ComponentPropsWithoutRef<'div'> {
  success?: boolean;
  disableAutoFocus?: boolean;
}

const NotificationBannerComponent = forwardRef<HTMLDivElement, NotificationBannerProps>(
  ({ children, className, title, success, role, disableAutoFocus, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<NotificationBannerModule>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
        return;
      }

      import('nhsuk-frontend')
        .then(({ NotificationBanner }) => setInstance(new NotificationBanner(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, instance]);

    const items = Children.toArray(children);

    const titleElement = items.find((child) =>
      childIsOfComponentType(child, NotificationBannerTitle, {
        className: 'nhsuk-notification-banner__title',
      }),
    );

    const headerElement = items.find((child) =>
      childIsOfComponentType(child, NotificationBannerHeading, {
        className: 'nhsuk-notification-banner__heading',
      }),
    );

    const bodyItems = items.filter((child) => child !== titleElement && child !== headerElement);

    if (instanceError) {
      throw instanceError;
    }

    return (
      <div
        className={classNames(
          'nhsuk-notification-banner',
          { 'nhsuk-notification-banner--success': success },
          className,
        )}
        aria-labelledby={titleElement?.props.id || 'nhsuk-notification-banner-title'}
        data-module="nhsuk-notification-banner"
        data-disable-auto-focus={disableAutoFocus}
        ref={moduleRef}
        role={role || (success ? 'alert' : 'region')}
      >
        <div className="nhsuk-notification-banner__header">
          {titleElement ? (
            <>{titleElement}</>
          ) : (
            <NotificationBannerTitle success={success}>{title}</NotificationBannerTitle>
          )}
        </div>
        <div className={'nhsuk-notification-banner__content'} {...rest}>
          {headerElement}
          {bodyItems}
        </div>
      </div>
    );
  },
);

NotificationBannerComponent.displayName = 'NotificationBanner';

export const NotificationBanner = Object.assign(NotificationBannerComponent, {
  Title: NotificationBannerTitle,
  Heading: NotificationBannerHeading,
  Link: NotificationBannerLink,
});
