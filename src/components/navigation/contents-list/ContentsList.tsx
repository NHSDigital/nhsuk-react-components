import React from 'react';
import classNames from 'classnames';

interface ContentsListItemProps extends React.HTMLProps<HTMLAnchorElement> {
  current?: boolean;
}

const ContentsListItem: React.FC<ContentsListItemProps> = ({ className, current, ...rest }) => (
  <li className={classNames('nhsuk-contents-list__item', className)}>
    {current ? (
      <span className="nhsuk-contents-list__current" {...rest} />
    ) : (
      <a className="nhsuk-contents-list__link" {...rest} />
    )}
  </li>
);

interface ContentsListProps extends React.HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface ContentsList extends React.FC<ContentsListProps> {
  Item: React.FC<ContentsListItemProps>;
}

const ContentsList: ContentsList = ({
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

ContentsList.Item = ContentsListItem;

export default ContentsList;
