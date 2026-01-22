import classNames from 'classnames';
import { forwardRef } from 'react';

import { type AsElementLink } from '#util/types/index.js';

export type FooterListItemLinkProps = AsElementLink<HTMLAnchorElement>;

export const FooterListItemLink = forwardRef<HTMLAnchorElement, FooterListItemLinkProps>(
  ({ className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element
      className={classNames('nhsuk-footer__list-item-link', className)}
      ref={forwardedRef}
      {...rest}
    />
  ),
);

FooterListItemLink.displayName = 'Footer.ListItemLink';
