import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

interface ContentsListItemProps extends HTMLProps<HTMLAnchorElement> {
  current?: boolean;
}

const ContentsListItem: FC<ContentsListItemProps> = ({ className, current, ...rest }) => (
  <li className={classNames('nhsuk-contents-list__item', className)}>
    {current ? (
      <span className="nhsuk-contents-list__current" {...rest} />
    ) : (
      <a className="nhsuk-contents-list__link" {...rest} />
    )}
  </li>
);

interface ContentsListProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface ContentsListComponent extends FC<ContentsListProps> {
  Item: FC<ContentsListItemProps>;
}

const ContentsListComponent: ContentsListComponent = ({
  className,
  children,
  role = 'navigation',
  visuallyHiddenText = 'Contents',
  ...rest
}) => (
  <nav className={classNames('nhsuk-contents-list', className)} role={role} {...rest}>
    {visuallyHiddenText !== false ? (
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
    ) : null}
    <ol className="nhsuk-contents-list__list">{children}</ol>
  </nav>
);

ContentsListComponent.Item = ContentsListItem;

export default ContentsListComponent;
