import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

export type HintTextProps = HTMLProps<HTMLDivElement>;

const HintTextComponent: FC<HintTextProps> = ({ className, children, ...rest }) => {
  if (!children) {
    return null;
  }

  return (
    <div className={classNames('nhsuk-hint', className)} {...rest}>
      {children}
    </div>
  );
};

export default HintTextComponent;
