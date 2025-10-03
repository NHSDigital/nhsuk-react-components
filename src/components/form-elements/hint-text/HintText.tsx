import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';

export type HintTextProps = ComponentPropsWithoutRef<'div'>;

export const HintText: FC<HintTextProps> = ({ children, className, ...rest }) => {
  if (!children) {
    return null;
  }

  return (
    <div className={classNames('nhsuk-hint', className)} {...rest}>
      {children}
    </div>
  );
};

HintText.displayName = 'HintText';
