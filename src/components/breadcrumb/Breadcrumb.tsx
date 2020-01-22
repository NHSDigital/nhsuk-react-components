/* eslint-disable jsx-a11y/anchor-has-content */
import React, { HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import { Container } from '../layout';

type Item = React.FC<HTMLProps<HTMLAnchorElement>>;

const Item: Item = ({ className, children, ...rest }) => (
  <li className="nhsuk-breadcrumb__item">
    <a className={classNames('nhsuk-breadcrumb__link', className)} {...rest}>
      {children}
    </a>
  </li>
);

const Back: Item = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-breadcrumb__back', className)}>
    <a className="nhsuk-breadcrumb__backlink" {...rest} />
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

const Breadcrumb: Breadcrumb = ({ className, children, ...rest }) => {
  // Split off any "Item" components
  const { ItemChildren, OtherChildren } = React.Children.toArray(children).reduce<SplitChildren>(
    (prev, child) => {
      if (child && typeof child === 'object' && 'type' in child && child.type === Item) {
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
    <nav className={classNames('nhsuk-breadcrumb', className)} {...rest}>
      <Container>
        <ol className="nhsuk-breadcrumb__list">{ItemChildren}</ol>
        {OtherChildren}
      </Container>
    </nav>
  );
};

Breadcrumb.Item = Item;
Breadcrumb.Back = Back;

Breadcrumb.defaultProps = {
  'aria-label': 'Breadcrumb',
};

export default Breadcrumb;
