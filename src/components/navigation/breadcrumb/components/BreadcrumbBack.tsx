import { forwardRef } from 'react';
import { type AsElementLink } from '#util/types/index.js';

import { BackLink } from '#components/navigation/back-link/index.js';

export type BreadcrumbBackProps = AsElementLink<HTMLAnchorElement>;

export const BreadcrumbBack = forwardRef<HTMLAnchorElement, BreadcrumbBackProps>(
  ({ children, ...rest }, forwardedRef) => (
    <BackLink ref={forwardedRef} {...rest}>
      <span className="nhsuk-u-visually-hidden">Back to&nbsp;</span>
      {children}
    </BackLink>
  ),
);

BreadcrumbBack.displayName = 'Breadcrumb.Back';
