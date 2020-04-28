import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const BodyText: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-body', className)} {...rest} />
);

export default BodyText;
