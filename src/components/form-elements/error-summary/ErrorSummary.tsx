'use client';

import classNames from 'classnames';
import { type ErrorSummary as ErrorSummaryModule } from 'nhsuk-frontend';
import {
  Children,
  createRef,
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import { childIsOfComponentType } from '#util/types/TypeGuards.js';
import { ErrorSummaryList, ErrorSummaryListItem, ErrorSummaryTitle } from './components/index.js';

export interface ErrorSummaryProps extends ComponentPropsWithoutRef<'div'> {
  disableAutoFocus?: boolean;
}

const ErrorSummaryComponent = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  ({ children, className, disableAutoFocus, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<ErrorSummaryModule>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
        return;
      }

      import('nhsuk-frontend')
        .then(({ ErrorSummary }) => setInstance(new ErrorSummary(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, instance]);

    const items = Children.toArray(children);

    const title = items.find((child) =>
      childIsOfComponentType(child, ErrorSummaryTitle, { className: 'nhsuk-error-summary__title' }),
    );

    const bodyItems = items.filter((child) => child !== title);

    if (instanceError) {
      throw instanceError;
    }

    return (
      <div
        className={classNames('nhsuk-error-summary', className)}
        data-module="nhsuk-error-summary"
        data-disable-auto-focus={disableAutoFocus}
        ref={moduleRef}
        {...rest}
      >
        {/* Keep the role="alert" in a seperate child container to prevent a race condition between
        the focusing js at the alert, resulting in information getting missed in screen reader announcements */}
        <div role="alert">
          {title}
          <div className="nhsuk-error-summary__body">{bodyItems}</div>
        </div>
      </div>
    );
  },
);

ErrorSummaryComponent.displayName = 'ErrorSummary';

export const ErrorSummary = Object.assign(ErrorSummaryComponent, {
  Title: ErrorSummaryTitle,
  List: ErrorSummaryList,
  ListItem: ErrorSummaryListItem,
});
