import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import FormGroupContext from '../form-group/FormGroupContext';

type HintProps = HTMLProps<HTMLDivElement>;

const Hint: React.FC<HintProps> = ({ className, id, ...rest }) => {
  const { getHintID } = useContext(FormGroupContext);
  return <div className={classNames('nhsuk-hint', className)} id={getHintID(id)} {...rest} />;
};

export default Hint;
