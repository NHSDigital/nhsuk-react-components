'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export type CardContentProps = ComponentPropsWithoutRef<'div'>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-card__content', className)} ref={forwardedRef} {...rest} />
  ),
);

CardContent.displayName = 'Card.Content';
