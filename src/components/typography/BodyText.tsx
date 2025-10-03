import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const BodyText: FC<ComponentPropsWithoutRef<'p'>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-body', className)} {...rest} />
);
