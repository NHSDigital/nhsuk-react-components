import classNames from 'classnames';
import { forwardRef } from 'react';

import { ArrowRightCircleIcon } from '#components/content-presentation/index.js';
import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface ActionLinkProps extends AsElementLink<HTMLAnchorElement> {
  reverse?: boolean;
}

export const ActionLink = forwardRef<HTMLAnchorElement, ActionLinkProps>(
  ({ children, className, reverse, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element
      className={classNames(
        'nhsuk-action-link',
        { 'nhsuk-action-link--reverse': reverse },
        className,
      )}
      ref={forwardedRef}
      {...rest}
    >
      <ArrowRightCircleIcon />
      <span className="nhsuk-action-link__text">{children}</span>
    </Element>
  ),
);

ActionLink.displayName = 'ActionLink';
