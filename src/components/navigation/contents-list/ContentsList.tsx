import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface ContentsListItemLinkProps extends AsElementLink<HTMLAnchorElement> {
  current?: false;
}

export interface ContentsListItemSpanProps extends ComponentPropsWithoutRef<'span'> {
  asElement?: never;
  current: true;
}

export type ContentsListItemProps = ContentsListItemLinkProps | ContentsListItemSpanProps;

export const ContentsListItem = forwardRef<HTMLAnchorElement, ContentsListItemProps>(
  ({ className, current, asElement: Element = 'a', ...rest }, forwardedRef) => {
    return (
      <li
        className={classNames('nhsuk-contents-list__item', className)}
        aria-current={current ? 'page' : undefined}
      >
        {current ? (
          <span className="nhsuk-contents-list__current" {...rest} />
        ) : (
          <Element className="nhsuk-contents-list__link" ref={forwardedRef} {...rest} />
        )}
      </li>
    );
  },
);

export interface ContentsListProps extends ComponentPropsWithoutRef<'div'> {
  visuallyHiddenText?: string;
}

const ContentsListComponent = forwardRef<HTMLElement, ContentsListProps>((props, forwardedRef) => {
  const {
    className,
    children,
    'aria-label': ariaLabel = 'Pages in this guide',
    visuallyHiddenText = 'Contents',
    ...rest
  } = props;

  return (
    <nav
      className={classNames('nhsuk-contents-list', className)}
      role="navigation"
      aria-label={ariaLabel}
      ref={forwardedRef}
      {...rest}
    >
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
      <ol className="nhsuk-contents-list__list">{children}</ol>
    </nav>
  );
});

ContentsListComponent.displayName = 'ContentsList';
ContentsListItem.displayName = 'ContentsList.Item';

export const ContentsList = Object.assign(ContentsListComponent, {
  Item: ContentsListItem,
});
