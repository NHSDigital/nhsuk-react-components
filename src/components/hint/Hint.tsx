<<<<<<< d5dccd10652d62a089e904999c074ce1f9b6cbe4
import React, { HTMLProps, useContext, useEffect } from 'react';
=======
import React, { HTMLProps, useContext } from 'react';
>>>>>>> snapshot testing fixed for hint and error messages

import FormGroupContext from '../formgroup/FormGroupContext';
import classNames from 'classnames';

export type HintProps = HTMLProps<HTMLDivElement>;

const Hint: React.FC<HintProps> = props => {
  const { isInFormGroup, setInputID } = useContext(FormGroupContext);

  useEffect(() => {
    if (isInFormGroup && props.id) {
      setInputID(props.id);
      return () => {
        setInputID(undefined);
      };
    }
    return () => {};
  }, [isInFormGroup, props.id]);

  const { className, ...rest } = props;
  return <div className={classNames('nhsuk-hint', className)} {...rest} />;
};

export default Hint;
