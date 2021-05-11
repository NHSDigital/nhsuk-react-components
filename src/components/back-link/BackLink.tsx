import React from 'react';
import classNames from 'classnames';
import { ChevronLeft } from '../icons';
import type { AsElementLink } from '../../util/types/LinkTypes';

const BackLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest }) => (
    <div className="nhsuk-back-link">
      <Component className={classNames('nhsuk-back-link__link', className)} {...rest}>
        <ChevronLeft />
        {children}
      </Component>
    </div>
);

export default BackLink;
