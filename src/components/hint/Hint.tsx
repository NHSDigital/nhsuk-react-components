import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export type HintProps = HTMLProps<HTMLSpanElement>;

const Hint: React.FC<HintProps> = ({ className, ...rest }) => (
  <span className={classNames('nhsuk-hint', className)} {...rest} />
);

export default Hint;
