import {
  Children,
  type ComponentPropsWithoutRef,
  createRef,
  forwardRef,
  useEffect,
  useState,
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
    const [instance, setInstance] = useState<NotificationBannerModule>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
        return;
      }

      const { current: $root } = moduleRef;

      import('nhsuk-frontend').then(({ NotificationBanner }) => {
        setInstance(new NotificationBanner($root));
      });
    }, [moduleRef, instance]);

    const items = Children.toArray(children);
    const titleElement = items.find((child) =>
      childIsOfComponentType(child, NotificationBannerTitle),
    ) || <NotificationBannerTitle success={success}>{title}</NotificationBannerTitle>;
    const nonTitleItems = items.filter(
      (child) => !childIsOfComponentType(child, NotificationBannerTitle),
    );
    const headerElement = nonTitleItems.find((child) =>
      childIsOfComponentType(child, NotificationBannerHeading),
    );
    const bodyItems = nonTitleItems.filter(
      (child) => !childIsOfComponentType(child, NotificationBannerHeading),
    );
    return (
      <div
        className={classNames(
          'nhsuk-notification-banner',
          { 'nhsuk-notification-banner--success': success },
          className,
        )}
        aria-labelledby={titleElement.props.id || 'nhsuk-notification-banner-title'}
        data-module="nhsuk-notification-banner"
        data-disable-auto-focus={disableAutoFocus}
        ref={moduleRef}
        role={role || (success ? 'alert' : 'region')}
      >
        {titleElement}
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
