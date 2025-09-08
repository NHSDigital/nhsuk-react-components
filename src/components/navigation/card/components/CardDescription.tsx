import React from 'react';
import classNames from 'classnames';

const CardDescription: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-card__description', className)} {...rest} />
);

export default CardDescription;
