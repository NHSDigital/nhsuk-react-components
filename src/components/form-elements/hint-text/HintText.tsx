import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

export type HintTextProps = ComponentPropsWithoutRef<'div'>;

const HintTextComponent: FC<HintTextProps> = ({ children, className, ...rest }) => {
  if (!children) {
    return null;
  }

  return (
    <div className={classNames('nhsuk-hint', className)} {...rest}>
      {children}
    </div>
  );
};

HintTextComponent.displayName = 'HintText';

export default HintTextComponent;
