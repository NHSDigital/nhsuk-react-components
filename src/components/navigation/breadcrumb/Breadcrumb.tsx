import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { childIsOfComponentType } from '#util/types/index.js';
import { BreadcrumbBack, BreadcrumbItem } from './components/index.js';

export type BreadcrumbProps = ComponentPropsWithoutRef<'nav'>;

const BreadcrumbComponent = forwardRef<HTMLElement, BreadcrumbProps>((props, forwardedRef) => {
  const { children, className, 'aria-label': ariaLabel = 'Breadcrumb', ...rest } = props;

  // Split off any "Item" components
  const { ItemChildren, OtherChildren } = Children.toArray(children).reduce<{
    ItemChildren: Array<ReactNode>;
    OtherChildren: Array<ReactNode>;
  }>(
    (prev, child) => {
      if (childIsOfComponentType(child, BreadcrumbItem)) {
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

export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem,
  Back: BreadcrumbBack,
});
