import classNames from 'classnames';
import React, { forwardRef, type ComponentPropsWithoutRef } from 'react';

export const CardDescription = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className, ...rest }, forwardedRef) => (
    <p className={classNames('nhsuk-card__description', className)} ref={forwardedRef} {...rest} />
  ),
);

CardDescription.displayName = 'Card.Description';
