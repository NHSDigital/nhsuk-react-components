import React, {
  Children,
  ComponentPropsWithoutRef,
  FC,
  createRef,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';
import { childIsOfComponentType } from '@util/types/TypeGuards';
import { ErrorSummary } from 'nhsuk-frontend';

export type TitleProps = ComponentPropsWithoutRef<'h2'>;

const Title: FC<TitleProps> = ({ children, className, ...rest }) => {
  return (
    <h2 className={classNames('nhsuk-error-summary__title', className)} {...rest}>
      {children}
    </h2>
  );
};

type ListProps = ComponentPropsWithoutRef<'ul'>;

const List: FC<ListProps> = ({ children, className, ...rest }) => {
  if (!children) {
    return null;
  }

  return (
    <ul className={classNames('nhsuk-list', 'nhsuk-error-summary__list', className)} {...rest}>
      {children}
    </ul>
  );
};

type ListItemProps = AsElementLink<HTMLAnchorElement>;

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>((props, forwardedRef) => {
  const { children, asElement: Element = 'a', ...rest } = props;

  if (!children) {
    return null;
  }

  return (
    <li>
      {props.asElement ?? props.href ? (
        <Element ref={forwardedRef} {...rest}>
          {children}
        </Element>
      ) : (
        <>{children}</>
      )}
    </li>
  );
});

interface ErrorSummaryProps extends ComponentPropsWithoutRef<'div'> {
  disableAutoFocus?: boolean;
}

const ErrorSummaryComponent = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  ({ children, className, disableAutoFocus, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
    const [instance, setInstance] = useState<ErrorSummary>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
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

ErrorSummaryComponent.displayName = 'ErrorSummary';
Title.displayName = 'ErrorSummary.Title';
List.displayName = 'ErrorSummary.List';
ListItem.displayName = 'ErrorSummary.ListItem';

export default Object.assign(ErrorSummaryComponent, {
  Title,
  List,
  ListItem,
});
