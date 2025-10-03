import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const LedeText: FC<ComponentPropsWithoutRef<'p'>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-lede-text', className)} {...rest} />
);
