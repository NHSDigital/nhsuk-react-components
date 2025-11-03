import classNames from 'classnames';
import { forwardRef } from 'react';

import { type AsElementLink } from '#util/types/index.js';

export type BreadcrumbItemProps = AsElementLink<HTMLAnchorElement>;

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
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

BreadcrumbItem.displayName = 'Breadcrumb.Item';
