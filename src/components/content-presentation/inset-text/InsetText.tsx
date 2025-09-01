import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const InsetTextComponent: FC<HTMLProps<HTMLDivElement>> = ({ className, children, ...rest }) => (
  <div className={classNames('nhsuk-inset-text', className)} {...rest}>
    <span className="nhsuk-u-visually-hidden">Information: </span>
    {children}
  </div>
);

InsetTextComponent.displayName = 'InsetText';

export default InsetTextComponent;
