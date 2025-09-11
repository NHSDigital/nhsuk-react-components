import React, { FC } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

const CardLink: FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  asElement: Element = 'a',
  ...rest
}) => <Element className={classNames('nhsuk-card__link', className)} {...rest} />;

CardLink.displayName = 'Card.Link';

export default CardLink;
