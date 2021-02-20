import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const CardDescription: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-card__description', className)} {...rest} />
);

export default CardDescription;
