import React, { HTMLProps, useContext } from 'react';

import FormGroupContext from '../formgroup/FormGroupContext';
import classNames from 'classnames';

export type HintProps = HTMLProps<HTMLSpanElement>;

const Hint: React.FC<HintProps> = props => {
  const { id, className, ...rest } = props;
  const { inputID } = useContext(FormGroupContext);
  const inputId = id || inputID ? `${inputID}--hint` : undefined;
  return <span id={inputId} className={classNames('nhsuk-hint', className)} {...rest} />;
};

export default Hint;
