import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

interface ContentsListItemProps extends ComponentPropsWithoutRef<'a'> {
  current?: boolean;
}

const ContentsListItem: FC<ContentsListItemProps> = ({ className, current, ...rest }) => (
  <li
    className={classNames('nhsuk-contents-list__item', className)}
    aria-current={current ? 'page' : undefined}
  >
    {current ? (
      <span className="nhsuk-contents-list__current" {...rest} />
    ) : (
      <a className="nhsuk-contents-list__link" {...rest} />
    )}
  </li>
);

interface ContentsListProps extends ComponentPropsWithoutRef<'div'> {
  visuallyHiddenText?: string;
}

const ContentsListComponent: FC<ContentsListProps> = ({
  className,
  children,
  role = 'navigation',
  'aria-label': ariaLabel = 'Pages in this guide',
  visuallyHiddenText = 'Contents',
  ...rest
}) => (
  <nav
    className={classNames('nhsuk-contents-list', className)}
    role={role}
    aria-label={ariaLabel}
    {...rest}
  >
    <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
    <ol className="nhsuk-contents-list__list">{children}</ol>
  </nav>
);

ContentsListComponent.displayName = 'ContentsList';
ContentsListItem.displayName = 'ContentsList.Item';

export default Object.assign(ContentsListComponent, {
  Item: ContentsListItem,
});
