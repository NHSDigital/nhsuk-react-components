import classNames from 'classnames';
import { forwardRef } from 'react';
import { type AsElementLink } from '#util/types/LinkTypes';

export type CardLinkProps = AsElementLink<HTMLAnchorElement>;

export const CardLink = forwardRef<HTMLAnchorElement, CardLinkProps>(
  ({ className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element className={classNames('nhsuk-card__link', className)} ref={forwardedRef} {...rest} />
  ),
);

CardLink.displayName = 'Card.Link';
