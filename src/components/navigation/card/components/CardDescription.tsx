import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const CardDescription: FC<ComponentPropsWithoutRef<'p'>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-card__description', className)} {...rest} />
);

CardDescription.displayName = 'Card.Description';

export default CardDescription;
