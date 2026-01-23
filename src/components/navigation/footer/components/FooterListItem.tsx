import { forwardRef } from 'react';

import { FooterListItemLink, type FooterListItemLinkProps } from './FooterListItemLink.js';

export const FooterListItem = forwardRef<HTMLAnchorElement, FooterListItemLinkProps>(
  (props, forwardedRef) => (
    <li className="nhsuk-footer__list-item">
      <FooterListItemLink ref={forwardedRef} {...props} />
    </li>
  ),
);

FooterListItem.displayName = 'Footer.ListItem';
