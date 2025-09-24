import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  fluid?: boolean;
}

const Container: FC<ContainerProps> = ({ className, fluid, ...rest }) => (
  <div
    className={classNames(
      { 'nhsuk-width-container': !fluid },
      { 'nhsuk-width-container-fluid': fluid },
      className,
    )}
    {...rest}
  />
);

export default Container;
