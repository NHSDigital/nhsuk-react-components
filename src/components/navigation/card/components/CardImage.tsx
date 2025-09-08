import React from 'react';
import classNames from 'classnames';

interface CardImageProps extends React.HTMLProps<HTMLImageElement> {
  // Overriding the default crossOrigin the default is crossOrigin: string | undefined
  // which causes a typescript "incompatible types" error.
  crossOrigin?: 'anonymous' | 'use-credentials' | undefined;
}

const CardImage: React.FC<CardImageProps> = ({ className, alt, ...rest }) => (
  <img className={classNames('nhsuk-card__img', className)} alt={alt} {...rest} />
);

export default CardImage;
