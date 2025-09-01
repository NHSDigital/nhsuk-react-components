import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

interface ContentsListItemProps extends HTMLProps<HTMLAnchorElement> {
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

interface ContentsListProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: string;
}

interface ContentsListComponent extends FC<ContentsListProps> {
  Item: FC<ContentsListItemProps>;
}

const ContentsListComponent: ContentsListComponent = ({
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

ContentsListComponent.Item = ContentsListItem;

export default ContentsListComponent;
