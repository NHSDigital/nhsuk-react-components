import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ContentsListItemProps extends HTMLProps<HTMLAnchorElement> {
  current?: boolean;
}

const ContentsListItem: React.FC<ContentsListItemProps> = ({ className, current, ...rest }) => (
  <li className={classNames('nhsuk-contents-list__item', className)}>
    {current ? (
      <span className="nhsuk-contents-list__current" {...rest}></span>
    ) : (
      <a className="nhsuk-contents-list__link" {...rest}></a>
    )}
  </li>
);

interface ContentsListProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface ContentsList extends React.FC<ContentsListProps> {
  Item: React.FC<ContentsListItemProps>;
}

const ContentsList: ContentsList = ({ className, children, visuallyHiddenText, ...rest }) => (
  <nav className={classNames('nhsuk-contents-list', className)} {...rest}>
    {visuallyHiddenText !== false ? (
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
    ) : null}
    <ol className="nhsuk-contents-list__list">{children}</ol>
  </nav>
);

ContentsList.defaultProps = {
  role: 'navigation',
  visuallyHiddenText: 'Contents',
};

ContentsList.Item = ContentsListItem;

export default ContentsList;
