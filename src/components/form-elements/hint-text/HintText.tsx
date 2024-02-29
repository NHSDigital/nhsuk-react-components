import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

export type HintTextProps = HTMLProps<HTMLDivElement>;

const HintText: FC<HintTextProps> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-hint', className)} {...rest} />
);

export default HintText;
