import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';

export interface ImagesProps extends ComponentPropsWithoutRef<'img'> {
  caption?: string;
}

const ImagesComponent = forwardRef<HTMLElement, ImagesProps>(
  ({ alt = '', className, caption, ...rest }, forwardedRef) => (
    <figure className="nhsuk-image" ref={forwardedRef}>
      <img className={classNames('nhsuk-image__img', className)} alt={alt} {...rest} />
      {caption ? <figcaption className="nhsuk-image__caption">{caption}</figcaption> : null}
    </figure>
  ),
);

ImagesComponent.displayName = 'Images';

export default ImagesComponent;
