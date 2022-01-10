import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import FormGroupContext from '../form-group/FormGroupContext';

type HintProps = HTMLProps<HTMLDivElement>;

const Hint: React.FC<HintProps> = ({ className, id, ...rest }) => {
  const { inputID } = useContext(FormGroupContext);
  const elementID = id || (inputID ? `${inputID}--hint` : undefined);
  return <div className={classNames('nhsuk-hint', className)} id={elementID} {...rest} />;
};

export default Hint;
