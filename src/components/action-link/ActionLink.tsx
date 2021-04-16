import React from 'react';
import classNames from 'classnames';
import { ArrowRightCircle } from '../icons';
import type { AsElementLink } from '../../util/types/LinkTypes';

const ActionLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  asElement: Component = 'a',
  className,
  ...rest
}) => (
  <div className="nhsuk-action-link">
    <Component className={classNames('nhsuk-action-link__link', className)} {...rest}>
      <ArrowRightCircle />
      <span className="nhsuk-action-link__text">{children}</span>
    </Component>
  </div>
);

export default ActionLink;
