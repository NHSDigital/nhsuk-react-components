import React, { Children, FC, HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';
import { childIsOfComponentType } from '@util/types/TypeGuards';
import BackLink from '../back-link';

type Item = FC<AsElementLink<HTMLAnchorElement>>;

const Item: Item = ({ className, children, asElement: Element = 'a', ...rest }) => (
  <li className="nhsuk-breadcrumb__list-item">
    <Element className={classNames('nhsuk-breadcrumb__link', className)} {...rest}>
      {children}
    </Element>
  </li>
);

type Back = typeof BackLink;

const Back: Back = ({ children, ...rest }) => (
  <BackLink {...rest}>
    <span className="nhsuk-u-visually-hidden">Back to&nbsp;</span>
    {children}
  </BackLink>
);

interface BreadcrumbComponent extends FC<HTMLProps<HTMLDivElement>> {
  Item: Item;
  Back: Back;
}

type SplitChildren = {
  ItemChildren: Array<ReactNode>;
  OtherChildren: Array<ReactNode>;
};

const BreadcrumbComponent: BreadcrumbComponent = ({
  className,
  children,
  'aria-label': ariaLabel = 'Breadcrumb',
  ...rest
}) => {
  // Split off any "Item" components
  const { ItemChildren, OtherChildren } = Children.toArray(children).reduce<SplitChildren>(
    (prev, child) => {
      if (childIsOfComponentType(child, Item)) {
        prev.ItemChildren.push(child);
      } else {
        prev.OtherChildren.push(child);
      }
      return prev;
    },
    {
      ItemChildren: [],
      OtherChildren: [],
    },
  );

  return (
    <nav className={classNames('nhsuk-breadcrumb', className)} aria-label={ariaLabel} {...rest}>
      <ol className="nhsuk-breadcrumb__list">{ItemChildren}</ol>
      {OtherChildren}
    </nav>
  );
};

BreadcrumbComponent.Item = Item;
BreadcrumbComponent.Back = Back;

export default BreadcrumbComponent;
