'use client';

import classNames from 'classnames';
import { type NotificationBanner as NotificationBannerModule } from 'nhsuk-frontend';
import {
  Children,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

import {
  NotificationBannerHeading,
  NotificationBannerLink,
  NotificationBannerTitle,
} from './components/index.js';

import { childIsOfComponentType } from '#util/types/TypeGuards.js';

export interface NotificationBannerProps extends ComponentPropsWithoutRef<'div'> {
  success?: boolean;
  disableAutoFocus?: boolean;
  titleId?: string;
}

const NotificationBannerComponent = forwardRef<HTMLDivElement, NotificationBannerProps>(
  (props, forwardedRef) => {
    const { children, className, title, titleId, success, role, disableAutoFocus, ...rest } = props;

    const moduleRef = useRef<HTMLDivElement>(null);
    const importRef = useRef<Promise<NotificationBannerModule | void>>(null);
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<NotificationBannerModule>();

    useImperativeHandle(forwardedRef, () => moduleRef.current!, [moduleRef]);

    useEffect(() => {
      if (!moduleRef.current || importRef.current || instance) {
        return;
      }

      importRef.current = import('nhsuk-frontend')
        .then(({ NotificationBanner }) => setInstance(new NotificationBanner(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, importRef, instance]);

    const items = Children.toArray(children);

    const titleElement = items.find((child) =>
      childIsOfComponentType(child, NotificationBannerTitle, {
        className: 'nhsuk-notification-banner__title',
      }),
    );

    const titleElementId = titleElement?.props.id || titleId || 'nhsuk-notification-banner-title';

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
        aria-labelledby={titleElementId}
        data-module="nhsuk-notification-banner"
        data-disable-auto-focus={disableAutoFocus}
        ref={moduleRef}
        role={role || (success ? 'alert' : 'region')}
        {...rest}
      >
        <div className="nhsuk-notification-banner__header">
          {titleElement ? (
            <>{titleElement}</>
          ) : (
            <NotificationBannerTitle id={titleElementId} success={success}>
              {title}
            </NotificationBannerTitle>
          )}
        </div>
        <div className="nhsuk-notification-banner__content">{contentItems}</div>
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
