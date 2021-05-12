import React, { HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import FormGroupContext from '../formgroup/FormGroupContext';

export type HintProps = HTMLProps<HTMLDivElement>;

const Hint: React.FC<HintProps> = (props) => {
  const { isInFormGroup, setInputID } = useContext(FormGroupContext);

  useEffect(() => {
    if (isInFormGroup && props.id) {
      setInputID(props.id);
      return () => {
        setInputID(undefined);
      };
    }
  }, [isInFormGroup, props.id]);

  const { className, ...rest } = props;
  return <div className={classNames('nhsuk-hint', className)} {...rest} />;
};

export default Hint;
