import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const CardImage: FC<ComponentPropsWithoutRef<'img'>> = ({ className, alt, ...rest }) => (
  <img className={classNames('nhsuk-card__img', className)} alt={alt} {...rest} />
);

CardImage.displayName = 'Card.Image';
