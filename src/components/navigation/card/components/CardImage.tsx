import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const CardImage: FC<ComponentPropsWithoutRef<'img'>> = ({ className, alt, ...rest }) => (
  <img className={classNames('nhsuk-card__img', className)} alt={alt} {...rest} />
);

CardImage.displayName = 'Card.Image';

export default CardImage;
