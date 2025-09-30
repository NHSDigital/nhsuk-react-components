import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';

type InsetTextProps = ComponentPropsWithoutRef<'div'>;

const InsetTextComponent = forwardRef<HTMLDivElement, InsetTextProps>(
  ({ className, children, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-inset-text', className)} ref={forwardedRef} {...rest}>
      <span className="nhsuk-u-visually-hidden">Information: </span>
      {children}
    </div>
  ),
);

InsetTextComponent.displayName = 'InsetText';

export default InsetTextComponent;
