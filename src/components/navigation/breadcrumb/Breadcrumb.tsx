import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { BackLink } from '#components/navigation/back-link/index.js';
import { childIsOfComponentType, type AsElementLink } from '#util/types/index.js';

export type ItemProps = AsElementLink<HTMLAnchorElement>;

const Item = forwardRef<HTMLAnchorElement, ItemProps>(
  ({ className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <li className="nhsuk-breadcrumb__list-item">
      <Element
        className={classNames('nhsuk-breadcrumb__link', className)}
        ref={forwardedRef}
        {...rest}
      />
    </li>
  ),
);

export type BackProps = AsElementLink<HTMLAnchorElement>;

const Back = forwardRef<HTMLAnchorElement, BackProps>(({ children, ...rest }, forwardedRef) => (
  <BackLink ref={forwardedRef} {...rest}>
    <span className="nhsuk-u-visually-hidden">Back to&nbsp;</span>
    {children}
  </BackLink>
));

export type BreadcrumbProps = ComponentPropsWithoutRef<'nav'>;

const BreadcrumbComponent = forwardRef<HTMLElement, BreadcrumbProps>((props, forwardedRef) => {
  const { children, className, 'aria-label': ariaLabel = 'Breadcrumb', ...rest } = props;

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
    <nav
      className={classNames('nhsuk-breadcrumb', className)}
      aria-label={ariaLabel}
      ref={forwardedRef}
      {...rest}
    >
      <ol className="nhsuk-breadcrumb__list">{ItemChildren}</ol>
      {OtherChildren}
    </nav>
  );
});

BreadcrumbComponent.displayName = 'Breadcrumb';
Item.displayName = 'Breadcrumb.Item';
Back.displayName = 'Breadcrumb.Back';

export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item,
  Back,
});
