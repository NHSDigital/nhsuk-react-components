import React, { FC } from 'react';
import classNames from 'classnames';
import { ChevronLeft } from '@components/content-presentation/icons';
import { AsElementLink } from '@util/types/LinkTypes';

const BackLink: FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <div className="nhsuk-back-link">
    <Component className={classNames('nhsuk-back-link__link', className)} {...rest}>
      <ChevronLeft height={24} width={24} />
      {children}
    </Component>
  </div>
);

export default BackLink;
