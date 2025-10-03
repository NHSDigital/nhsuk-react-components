import classNames from 'classnames';
import { type ErrorSummary as ErrorSummaryModule } from 'nhsuk-frontend';
import {
  Children,
  createRef,
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type FC,
} from 'react';
import { childIsOfComponentType, type AsElementLink } from '#util/types';

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
      {(props.asElement ?? props.href) ? (
        <Element ref={forwardedRef} {...rest}>
          {children}
        </Element>
      ) : (
        <>{children}</>
      )}
    </li>
  );
});

export interface ErrorSummaryProps extends ComponentPropsWithoutRef<'div'> {
  disableAutoFocus?: boolean;
}

const ErrorSummaryComponent = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  ({ children, className, disableAutoFocus, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
    const [instance, setInstance] = useState<ErrorSummaryModule>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
        return;
      }

      const { current: $root } = moduleRef;

      import('nhsuk-frontend').then(({ ErrorSummary }) => {
        setInstance(new ErrorSummary($root));
      });
    }, [moduleRef, instance]);

    const items = Children.toArray(children);
    const title = items.find((child) => childIsOfComponentType(child, Title));
    const bodyItems = items.filter((child) => !childIsOfComponentType(child, Title));

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
Title.displayName = 'ErrorSummary.Title';
List.displayName = 'ErrorSummary.List';
ListItem.displayName = 'ErrorSummary.ListItem';

export const ErrorSummary = Object.assign(ErrorSummaryComponent, {
  Title,
  List,
  ListItem,
});
