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
  titleId?: string;
}

const NotificationBannerComponent = forwardRef<HTMLDivElement, NotificationBannerProps>(
  (
    { children, className, title, titleId, success, role, disableAutoFocus, ...rest },
    forwardedRef,
  ) => {
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

    const contentItems = items.filter((child) => child !== titleElement);

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
        aria-labelledby={titleId || titleElement?.props.id || 'nhsuk-notification-banner-title'}
        data-module="nhsuk-notification-banner"
        data-disable-auto-focus={disableAutoFocus}
        ref={moduleRef}
        role={role || (success ? 'alert' : 'region')}
      >
        <div className="nhsuk-notification-banner__header">
          {titleElement ? (
            <>{titleElement}</>
          ) : (
            <NotificationBannerTitle success={success} id={titleId}>
              {title}
            </NotificationBannerTitle>
          )}
        </div>
        <div className={'nhsuk-notification-banner__content'} {...rest}>
          {contentItems}
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
