import React, { FC } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

const BackLinkComponent: FC<AsElementLink<HTMLAnchorElement>> = ({
  children = 'Back',
  className,
  asElement: Element = 'a',
  ...rest
}) => (
  <Element className={classNames('nhsuk-back-link', className)} {...rest}>
    {children}
  </Element>
);

export default BackLinkComponent;
