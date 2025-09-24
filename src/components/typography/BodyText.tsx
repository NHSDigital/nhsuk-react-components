import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const BodyText: FC<ComponentPropsWithoutRef<'p'>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-body', className)} {...rest} />
);

export default BodyText;
