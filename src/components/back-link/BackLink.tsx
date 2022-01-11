import classNames from 'classnames';
import React from 'react';
import type { AsElementLink } from '../../util/types/LinkTypes';
import { ChevronLeft } from '../icons';

const BackLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <div className="nhsuk-back-link">
    <Component className={classNames('nhsuk-back-link__link', className)} {...rest}>
      <ChevronLeft />
      {children}
    </Component>
  </div>
);

export default BackLink;
