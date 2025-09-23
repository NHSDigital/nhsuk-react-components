import React, { FC } from 'react';
import classNames from 'classnames';
import { ChevronLeft } from '@components/content-presentation/icons';
import { AsElementLink } from '@util/types/LinkTypes';

const BackLinkComponent: FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Element = 'a',
  ...rest
}) => (
  <div className="nhsuk-back-link">
    <Element className={classNames('nhsuk-back-link__link', className)} {...rest}>
      <ChevronLeft height={24} width={24} />
      {children}
    </Element>
  </div>
);

export default BackLinkComponent;
