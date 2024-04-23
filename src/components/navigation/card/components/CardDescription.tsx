import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const CardDescription: FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-card__description', className)} {...rest} />
);

export default CardDescription;
