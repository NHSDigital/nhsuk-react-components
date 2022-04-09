import classNames from 'classnames';
import React from 'react';
import type { AsElementLink } from '../../util/types/LinkTypes';
import { ArrowRightCircle } from '../icons';

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
