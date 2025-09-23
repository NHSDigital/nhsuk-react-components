import React, { FC } from 'react';
import classNames from 'classnames';
import { ArrowRightCircle } from '@components/content-presentation/icons';
import { AsElementLink } from '@util/types/LinkTypes';

const ActionLinkComponent: FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  asElement: Element = 'a',
  className,
  ...rest
}) => (
  <div className="nhsuk-action-link">
    <Element className={classNames('nhsuk-action-link__link', className)} {...rest}>
      <ArrowRightCircle width={36} height={36} />
      <span className="nhsuk-action-link__text">{children}</span>
    </Element>
  </div>
);

export default ActionLinkComponent;
