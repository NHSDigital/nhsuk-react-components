import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { ArrowRightCircleIcon } from '#components/content-presentation';
import { type AsElementLink } from '#util/types';

export type ActionLinkProps = AsElementLink<HTMLAnchorElement>;

export const ActionLink = forwardRef<HTMLAnchorElement, ActionLinkProps>(
  ({ children, className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element className={classNames('nhsuk-action-link', className)} ref={forwardedRef} {...rest}>
      <ArrowRightCircleIcon />
      <span className="nhsuk-action-link__text">{children}</span>
    </Element>
  ),
);

ActionLink.displayName = 'ActionLink';
