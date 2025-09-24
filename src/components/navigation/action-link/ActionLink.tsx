import React, { FC } from 'react';
import classNames from 'classnames';
import { ArrowRightCircle } from '@components/content-presentation/icons';
import { AsElementLink } from '@util/types/LinkTypes';

type ActionLinkProps = AsElementLink<HTMLAnchorElement>;

const ActionLinkComponent: FC<ActionLinkProps> = ({
  children,
  asElement: Element = 'a',
  className,
  ...rest
}) => (
  <Element className={classNames('nhsuk-action-link', className)} {...rest}>
    <ArrowRightCircle />
    <span className="nhsuk-action-link__text">{children}</span>
  </Element>
);

ActionLinkComponent.displayName = 'ActionLink';

export default ActionLinkComponent;
