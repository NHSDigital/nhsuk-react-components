import React from 'react';
import classNames from 'classnames';

export type HintTextProps = React.HTMLProps<HTMLDivElement>;

const HintText: React.FC<HintTextProps> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-hint', className)} {...rest} />
);

export default HintText;
