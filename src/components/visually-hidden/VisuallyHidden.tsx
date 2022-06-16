import classNames from 'classnames';
import React, { ElementType, HTMLProps } from 'react';

interface VisuallyHiddenProps extends HTMLProps<HTMLElement> {
  asElement?: ElementType;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  asElement: Component,
  className,
  ...rest
}) => <Component className={classNames('nhsuk-u-visually-hidden', className)} {...rest} />;

VisuallyHidden.defaultProps = {
  asElement: 'span',
};

export default VisuallyHidden;
