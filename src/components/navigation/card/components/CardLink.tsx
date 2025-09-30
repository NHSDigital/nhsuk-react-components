import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

export type CardLinkProps = AsElementLink<HTMLAnchorElement>;

const CardLink = forwardRef<HTMLAnchorElement, CardLinkProps>(
  ({ className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element className={classNames('nhsuk-card__link', className)} ref={forwardedRef} {...rest} />
  ),
);

CardLink.displayName = 'Card.Link';

export default CardLink;
