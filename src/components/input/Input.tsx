import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import FormGroup from '../../util/FormGroup';
import { InputWidth } from '../../util/types/NHSUKTypes';
import { FormElementProps } from '../../util/types/FormTypes';
// import { generateRandomName } from '../../util/RandomName';
// import LabelBlock from '../../util/LabelBlock';
// import { useFormContext } from '../form/FormContext';

interface InputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  width?: InputWidth;
  disableErrorLine?: boolean;
}

// const Input: React.FC<InputProps> = ({
//   className,
//   label,
//   id,
//   ref,
//   labelProps,
//   hint,
//   hintProps,
//   error,
//   errorProps,
//   width,
//   ...rest
// }) => {
//   const [name] = useState<string>(rest.name || generateRandomName('input'));

//   return (
//     <>
//       <LabelBlock
//         elementId={id}
//         label={label}
//         labelProps={labelProps}
//         hint={hint}
//         hintProps={hintProps}
//         error={error}
//         errorProps={errorProps}
//       />
//       <input
//         className={classNames(
//           'nhsuk-input',
//           { [`nhsuk-input--width-${width}`]: width },
//           { 'nhsuk-input--error': error },
//           className,
//         )}
//         id={id}
//         ref={ref}
//         aria-describedby={hint && id ? `${id}-label` : undefined}
//         {...rest}
//       />
//     </>
//   );
// };

// Input.defaultProps = {
//   type: 'text',
// };

const Input: React.FC<InputProps> = props => (
  <FormGroup {...props} inputType="input">
    {(props: any) => (
      <input
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${props.width}`]: props.width },
          { 'nhsuk-input--error': props.error },
          props.className,
        )}
        {...props}
      />
    )}
  </FormGroup>
);

export default Input;
