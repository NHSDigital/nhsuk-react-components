import classNames from 'classnames';
import { forwardRef } from 'react';
import { type AsElementLink } from '#util/types';

export type BackLinkProps = AsElementLink<HTMLAnchorElement>;

export const BackLink = forwardRef<HTMLAnchorElement, BackLinkProps>(
  ({ children = 'Back', className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element className={classNames('nhsuk-back-link', className)} ref={forwardedRef} {...rest}>
      {children}
    </Element>
  ),
);

BackLink.displayName = 'BackLink';
