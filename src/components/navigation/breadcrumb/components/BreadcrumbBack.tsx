import { forwardRef } from 'react';

import { BackLink, type BackLinkProps } from '#components/navigation/back-link/index.js';

export const BreadcrumbBack = forwardRef<HTMLAnchorElement, BackLinkProps>(
  ({ children, ...rest }, forwardedRef) => (
    <BackLink visuallyHiddenText="Back to" ref={forwardedRef} {...rest}>
      {children}
    </BackLink>
  ),
);

BreadcrumbBack.displayName = 'Breadcrumb.Back';
