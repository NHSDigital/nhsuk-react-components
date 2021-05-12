import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import FormGroupContext from '../formgroup/FormGroupContext';

export type HintProps = HTMLProps<HTMLDivElement>;

const Hint: React.FC<HintProps> = ({ className, id, ...rest }) => {
  const { inputID } = useContext(FormGroupContext);
  const elementID = id || (inputID ? `${inputID}--hint` : undefined);
  return <div className={classNames('nhsuk-hint', className)} id={elementID} {...rest} />;
};

export default Hint;
