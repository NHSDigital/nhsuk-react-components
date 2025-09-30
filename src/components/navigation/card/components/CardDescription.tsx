import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';

const CardDescription = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className, ...rest }, forwardedRef) => (
    <p className={classNames('nhsuk-card__description', className)} ref={forwardedRef} {...rest} />
  ),
);

CardDescription.displayName = 'Card.Description';

export default CardDescription;
