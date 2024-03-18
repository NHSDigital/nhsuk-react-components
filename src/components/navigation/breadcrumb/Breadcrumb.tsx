import React, { HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import { Container } from '@components/layout';
import type { AsElementLink } from '@util/types/LinkTypes';
import { childIsOfComponentType } from '@util/types/TypeGuards';

type Item = React.FC<AsElementLink<HTMLAnchorElement>>;

const Item: Item = ({ className, children, asElement: Component = 'a', ...rest }) => (
  <li className="nhsuk-breadcrumb__item">
    <Component className={classNames('nhsuk-breadcrumb__link', className)} {...rest}>
      {children}
    </Component>
  </li>
);

type Back = React.FC<AsElementLink<HTMLAnchorElement> & { accessiblePrefix?: string }>;

const Back: Back = ({
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

interface Breadcrumb extends React.FC<HTMLProps<HTMLDivElement>> {
  Item: Item;
  Back: Item;
}

type SplitChildren = {
  ItemChildren: Array<ReactNode>;
  OtherChildren: Array<ReactNode>;
};

const Breadcrumb: Breadcrumb = ({
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
    {
      ItemChildren: [],
      OtherChildren: [],
    },
  );

  return (
    <nav className={classNames('nhsuk-breadcrumb', className)} aria-label={ariaLabel} {...rest}>
      <Container>
        <ol className="nhsuk-breadcrumb__list">{ItemChildren}</ol>
        {OtherChildren}
      </Container>
    </nav>
  );
};

Breadcrumb.Item = Item;
Breadcrumb.Back = Back;

export default Breadcrumb;
