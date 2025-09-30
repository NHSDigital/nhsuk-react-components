import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

export type BackLinkProps = AsElementLink<HTMLAnchorElement>;

const BackLinkComponent = forwardRef<HTMLAnchorElement, BackLinkProps>(
  ({ children = 'Back', className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element className={classNames('nhsuk-back-link', className)} ref={forwardedRef} {...rest}>
      {children}
    </Element>
  ),
);

BackLinkComponent.displayName = 'BackLink';

export default BackLinkComponent;
