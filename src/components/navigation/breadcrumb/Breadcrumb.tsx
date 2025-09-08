import * as React from 'react';
import classNames from 'classnames';
import type { AsElementLink } from '@util/types/LinkTypes';
import { childIsOfComponentType } from '@util/types/TypeGuards';

type ItemProps = AsElementLink<'a'>;

const Item: React.FC<ItemProps> = ({ className, children, asElement: Component = 'a', ...rest }) => (
  <li className="nhsuk-breadcrumb__item">
    <Component className={classNames('nhsuk-breadcrumb__link', className)} {...rest}>
      {children}
    </Component>
  </li>
);

type BackProps = AsElementLink<'a'> & { accessiblePrefix?: string };

const Back: React.FC<BackProps> = ({
  className,
  children,
  asElement: Component = 'a',
  accessiblePrefix = 'Back to &nbsp;',
  ...rest
}) => (
  <p className={classNames('nhsuk-breadcrumb__back', className)}>
    <Component className="nhsuk-breadcrumb__backlink" {...rest}>
      <span className="nhsuk-u-visually-hidden">{accessiblePrefix}</span>
      {children}
    </Component>
  </p>
);

type BreadcrumbProps = React.HTMLProps<HTMLDivElement>;

type SplitChildren = {
  ItemChildren: Array<React.ReactNode>;
  OtherChildren: Array<React.ReactNode>;
};

const Breadcrumb: React.FC<BreadcrumbProps> & { Item: typeof Item; Back: typeof Back } = ({
  className,
  children,
  'aria-label': ariaLabel = 'Breadcrumb',
  ...rest
}) => {
  // Split off any "Item" components
  const { ItemChildren, OtherChildren } = React.Children.toArray(children).reduce<SplitChildren>(
    (prev, child) => {
      if (childIsOfComponentType(child, Item)) {
        prev.ItemChildren.push(child);
      } else {
        prev.OtherChildren.push(child);
      }
      return prev;
    },
    { ItemChildren: [], OtherChildren: [] }
  );

  return (
    <nav className={classNames('nhsuk-breadcrumb', className)} aria-label={ariaLabel} {...rest}>
      <ol className="nhsuk-breadcrumb__list">{ItemChildren}</ol>
      {OtherChildren}
    </nav>
  );
};

Breadcrumb.Item = Item;
Breadcrumb.Back = Back;

export default Breadcrumb;
