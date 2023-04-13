import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import type { AsElementLink } from '../../util/types/LinkTypes';
import { ArrowRightIcon } from '../..';

interface PanelProps extends HTMLProps<HTMLDivElement> {
  labelProps?: HTMLProps<HTMLHeadingElement>;
  backToTop?: boolean;
  backToTopButtonText?: string;
  backToTopLink?: string;
  noResults?: boolean;
}

const Panel: React.FC<PanelProps> = ({
  className,
  children,
  noResults,
  label,
  labelProps,
  backToTop,
  backToTopLink,
  backToTopButtonText,
  ...rest
}) => (
  <li>
    <div className={classNames('nhsuk-list-panel', className)} {...rest}>
      {label ? (
        <h2 className="nhsuk-list-panel__label" {...labelProps}>
          {label}
        </h2>
      ) : null}
      {noResults ? (
        <div
          className={classNames('nhsuk-list-panel__box', {
            'nhsuk-list-panel__box--with-label': label,
          })}
        >
          <p className="nhsuk-list-panel--results-items__no-results">{children}</p>
        </div>
      ) : (
        <ul
          className={classNames('nhsuk-list-panel__list', {
            'nhsuk-list-panel__list--with-label': label,
          })}
        >
          {children}
        </ul>
      )}
      {backToTop ? (
        <div className="nhsuk-back-to-top">
          <a className="nhsuk-back-to-top__link" href={backToTopLink}>
            <ArrowRightIcon width={19} height={19} />
            {backToTopButtonText || 'Back to top'}
          </a>
        </div>
      ) : null}
    </div>
  </li>
);

const PanelItem: React.FC<HTMLProps<HTMLLIElement>> = ({ className, ...rest }) => (
  <li className={classNames('nhsuk-list-panel__item', className)} {...rest} />
);

const PanelLinkItem: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <PanelItem>
    <Component className={classNames('nhsuk-list-panel__link', className)} {...rest} />
  </PanelItem>
);

interface ListPanelProps extends HTMLProps<HTMLOListElement> {
  type?: 'a' | 'i' | '1' | 'A' | 'I' | undefined;
}

interface ListPanel extends React.FC<ListPanelProps> {
  LinkItem: React.FC<HTMLProps<HTMLAnchorElement>>;
  Item: React.FC<HTMLProps<HTMLLIElement>>;
  Panel: React.FC<PanelProps>;
}

const ListPanel: ListPanel = ({ className, children, ...rest }) => (
  <ol className={classNames('nhsuk-list', className)} {...rest}>
    {children}
  </ol>
);

ListPanel.LinkItem = PanelLinkItem;
ListPanel.Item = PanelItem;
ListPanel.Panel = Panel;

export default ListPanel;
