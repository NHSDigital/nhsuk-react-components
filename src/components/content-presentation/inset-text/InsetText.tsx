import classNames from 'classnames';
import React, { forwardRef, type ComponentPropsWithoutRef } from 'react';

export type InsetTextProps = ComponentPropsWithoutRef<'div'>;

export const InsetText = forwardRef<HTMLDivElement, InsetTextProps>(
  ({ className, children, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-inset-text', className)} ref={forwardedRef} {...rest}>
      <span className="nhsuk-u-visually-hidden">Information: </span>
      {children}
    </div>
  ),
);

InsetText.displayName = 'InsetText';
