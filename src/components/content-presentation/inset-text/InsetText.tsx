import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const InsetTextComponent: FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  children,
  ...rest
}) => (
  <div className={classNames('nhsuk-inset-text', className)} {...rest}>
    <span className="nhsuk-u-visually-hidden">Information: </span>
    {children}
  </div>
);

InsetTextComponent.displayName = 'InsetText';

export default InsetTextComponent;
