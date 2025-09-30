import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { ArrowRightCircle } from '@components/content-presentation/icons';
import { AsElementLink } from '@util/types/LinkTypes';

type ActionLinkProps = AsElementLink<HTMLAnchorElement>;

const ActionLinkComponent = forwardRef<HTMLAnchorElement, ActionLinkProps>(
  ({ children, className, asElement: Element = 'a', ...rest }, forwardedRef) => (
    <Element className={classNames('nhsuk-action-link', className)} ref={forwardedRef} {...rest}>
      <ArrowRightCircle />
      <span className="nhsuk-action-link__text">{children}</span>
    </Element>
  ),
);

ActionLinkComponent.displayName = 'ActionLink';

export default ActionLinkComponent;
