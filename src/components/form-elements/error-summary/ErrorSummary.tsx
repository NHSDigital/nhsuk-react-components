import React, {
  Children,
  ComponentProps,
  FC,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  createRef,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import classNames from 'classnames';
import { childIsOfComponentType } from '@util/types/TypeGuards';
import { ErrorSummary } from 'nhsuk-frontend';

const Title: FC<ComponentProps<'h2'>> = ({ children, className, ...rest }) => {
  return (
    <h2 className={classNames('nhsuk-error-summary__title', className)} {...rest}>
      {children}
    </h2>
  );
};

const List: FC<ComponentProps<'ul'>> = ({ children, className, ...rest }) => {
  if (!children) {
    return null;
  }

  return (
    <ul className={classNames('nhsuk-list', 'nhsuk-error-summary__list', className)} {...rest}>
      {children}
    </ul>
  );
};

const ListItem: FC<ComponentProps<'a'>> = ({ children, href, ...rest }) => {
  if (!children) {
    return null;
  }

  return (
    <li>
      {href ? (
        <a href={href} {...rest}>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </li>
  );
};

interface ErrorSummaryProps extends ComponentProps<'div'> {
  disableAutoFocus?: boolean;
}

interface ErrorSummaryComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<ErrorSummaryProps> & RefAttributes<HTMLDivElement>
  > {
  Title: FC<ComponentProps<'h2'>>;
  List: FC<ComponentProps<'ul'>>;
  ListItem: FC<ComponentProps<'a'>>;
}

const ErrorSummaryDiv = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  ({ children, className, disableAutoFocus, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
    const [instance, setInstance] = useState<ErrorSummary>();

    useEffect(() => {
      if (!moduleRef || !('current' in moduleRef) || instance) {
        return;
      }

      setInstance(new ErrorSummary(moduleRef.current));
    }, [moduleRef, instance]);

    const items = Children.toArray(children);
    const [title] = items.filter((child) => childIsOfComponentType(child, Title));
    const bodyItems = items.filter((child) => !childIsOfComponentType(child, Title));

    return (
      <div
        className={classNames('nhsuk-error-summary', className)}
        data-module="nhsuk-error-summary"
        data-disable-auto-focus={
          typeof disableAutoFocus !== 'undefined' ? disableAutoFocus : undefined
        }
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

Title.displayName = 'ErrorSummary.Title';
List.displayName = 'ErrorSummary.List';
ListItem.displayName = 'ErrorSummary.ListItem';
ErrorSummaryDiv.displayName = 'ErrorSummary';

const ErrorSummaryComponent: ErrorSummaryComponent = Object.assign(ErrorSummaryDiv, {
  Title,
  List,
  ListItem,
});

export default ErrorSummaryComponent;
