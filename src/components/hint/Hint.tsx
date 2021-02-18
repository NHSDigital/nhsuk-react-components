import React, { HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import FormGroupContext from '../formgroup/FormGroupContext';

export type HintProps = HTMLProps<HTMLSpanElement>;

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

  /* if (isInFormGroup) {
    return <HintTag {...props} />;
  } */
  return <HintTag {...props} />;
};

const HintTag: React.FC<HintProps> = props => {
  const { className, ...rest } = props;
  return <span className={classNames('nhsuk-hint', className)} {...rest} />;
};

/* const Hint: React.FC<HintProps> = ({ className, ...rest }) => (
  <span className={classNames('nhsuk-hint', className)} {...rest} />
); */
export default Hint;
