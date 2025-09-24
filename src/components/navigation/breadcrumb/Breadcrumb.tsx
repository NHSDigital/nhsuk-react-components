import React, { Children, ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';
import { childIsOfComponentType } from '@util/types/TypeGuards';
import BackLink from '../back-link';

export type ItemProps = AsElementLink<HTMLAnchorElement>;

const Item: FC<ItemProps> = ({
  className,
  children,
  asElement: Element = 'a',
  ...rest
}) => (
  <li className="nhsuk-breadcrumb__list-item">
    <Element className={classNames('nhsuk-breadcrumb__link', className)} {...rest}>
      {children}
    </Element>
  </li>
);

export type BackProps = AsElementLink<HTMLAnchorElement>;

const Back: FC<BackProps> = ({ children, ...rest }) => (
  <BackLink {...rest}>
    <span className="nhsuk-u-visually-hidden">Back to&nbsp;</span>
    {children}
  </BackLink>
);

export type BreadcrumbProps = ComponentPropsWithoutRef<'nav'>;

const BreadcrumbComponent: FC<BreadcrumbProps> = ({
  className,
  children,
  'aria-label': ariaLabel = 'Breadcrumb',
  ...rest
}) => {
  // Split off any "Item" components
  const { ItemChildren, OtherChildren } = Children.toArray(children).reduce<{
    ItemChildren: Array<ReactNode>;
    OtherChildren: Array<ReactNode>;
  }>(
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

BreadcrumbComponent.displayName = 'Breadcrumb';
Item.displayName = 'Breadcrumb.Item';
Back.displayName = 'Breadcrumb.Back';

export default Object.assign(BreadcrumbComponent, {
  Item,
  Back,
});
