import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  fluid?: boolean;
}

export const Container: FC<ContainerProps> = ({ className, fluid, ...rest }) => (
  <div
    className={classNames(
      { 'nhsuk-width-container': !fluid },
      { 'nhsuk-width-container-fluid': fluid },
      className,
    )}
    {...rest}
  />
);
