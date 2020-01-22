import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ImageProps extends HTMLProps<HTMLImageElement> {
  // Overriding the default crossOrigin the default is crossOrigin: string | undefined
  // which causes a typescript "incompatible types" error.
  crossOrigin?: 'anonymous' | 'use-credentials' | undefined;
  caption?: string;
}

const Images: React.FC<ImageProps> = ({ className, src, caption, ...rest }) => (
  <figure className="nhsuk-image">
    <img className={classNames('nhsuk-image__img', className)} {...rest}></img>
    {caption ? <figcaption className="nhsuk-image__caption">{caption}</figcaption> : null}
  </figure>
);

export default Images;
