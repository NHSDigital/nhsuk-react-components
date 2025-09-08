import React from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

const CardLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  asElement: Component = 'a',
  ...rest
}) => <Component className={classNames('nhsuk-card__link', className)} {...rest} />;

export default CardLink;
