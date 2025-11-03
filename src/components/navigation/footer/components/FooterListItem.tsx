import classNames from 'classnames';
import { forwardRef } from 'react';

import { type AsElementLink } from '#util/types/index.js';

export type FooterListItemProps = AsElementLink<HTMLAnchorElement>;

export const FooterListItem = forwardRef<HTMLAnchorElement, FooterListItemProps>(
  ({ className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <li className="nhsuk-footer__list-item">
      <Element
        className={classNames('nhsuk-footer__list-item-link', className)}
        ref={forwardedRef}
        {...rest}
      />
    </li>
  ),
);

FooterListItem.displayName = 'Footer.ListItem';
