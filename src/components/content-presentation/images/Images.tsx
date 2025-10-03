import classNames from 'classnames';
import React, { forwardRef, type ComponentPropsWithoutRef } from 'react';

export interface ImagesProps extends ComponentPropsWithoutRef<'img'> {
  caption?: string;
}

export const Images = forwardRef<HTMLElement, ImagesProps>(
  ({ alt = '', className, caption, ...rest }, forwardedRef) => (
    <figure className="nhsuk-image" ref={forwardedRef}>
      <img className={classNames('nhsuk-image__img', className)} alt={alt} {...rest} />
      {caption ? <figcaption className="nhsuk-image__caption">{caption}</figcaption> : null}
    </figure>
  ),
);

Images.displayName = 'Images';
