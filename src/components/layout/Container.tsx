import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

interface ContainerProps extends HTMLProps<HTMLDivElement> {
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
