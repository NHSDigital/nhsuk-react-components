import classNames from 'classnames';
import React, { HTMLProps, ReactNode, useContext, useState } from 'react';
import FormGroupContext from './FormGroupContext';

interface IFormGroupProps extends HTMLProps<HTMLDivElement> {
  disableErrorLine?: boolean;
  error?: ReactNode;
}

const FormGroup: React.FC<IFormGroupProps> = ({ className, error, children, ...rest }) => {
  const [componentsWithError, setComponentsWithError] = useState<string[]>([]);
  const { isInsideFormGroup } = useContext(FormGroupContext);

  const passError = (id: string, hasError: boolean) => {
    setComponentsWithError((existingErroredComponents) => {
      if (existingErroredComponents.includes(id) && !hasError) {
        return existingErroredComponents.filter((existingID) => existingID !== id);
      }

      if (!existingErroredComponents.includes(id) && hasError) {
        return [...existingErroredComponents, id];
      }

      return existingErroredComponents;
    });
  };

  return (
    <div
      className={classNames(
        'nhsuk-form-group',
        { 'nhsuk-form-group--error': error || componentsWithError.length > 0 },
        className,
      )}
      {...rest}
    >
      {isInsideFormGroup ? (
        children
      ) : (
        <FormGroupContext.Provider value={{ isInsideFormGroup: true, passError }}>
          {children}
        </FormGroupContext.Provider>
      )}
    </div>
  );
};

export default FormGroup;
