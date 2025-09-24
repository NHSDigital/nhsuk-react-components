import React, { FC } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

export type BackLinkProps = AsElementLink<HTMLAnchorElement>;

const BackLinkComponent: FC<BackLinkProps> = ({
  children = 'Back',
  className,
  asElement: Element = 'a',
  ...rest
}) => (
  <Element className={classNames('nhsuk-back-link', className)} {...rest}>
    {children}
  </Element>
);

BackLinkComponent.displayName = 'BackLink';

export default BackLinkComponent;
