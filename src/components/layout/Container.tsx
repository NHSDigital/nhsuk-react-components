import React from 'react';
import classNames from 'classnames';

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ className, fluid, ...rest }) => (
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
