import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

interface ImageProps extends ComponentPropsWithoutRef<'img'> {
  caption?: string;
}

const ImagesComponent: FC<ImageProps> = ({ className, caption, ...rest }) => (
  <figure className="nhsuk-image">
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img className={classNames('nhsuk-image__img', className)} {...rest} />
    {caption ? <figcaption className="nhsuk-image__caption">{caption}</figcaption> : null}
  </figure>
);

ImagesComponent.displayName = 'Images';

export default ImagesComponent;
