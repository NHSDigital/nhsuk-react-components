import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import FormGroupContext, { IFormGroupContext } from './FormGroupContext';

interface FormGroupProps extends React.HTMLProps<HTMLDivElement> {
  enableErrorLine?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({
  enableErrorLine = false,
  className,
  children,
  ...rest
}: FormGroupProps) => {
  const [registeredComponents, setRegisteredComponents] = useState<string[]>([]);
  const [erroredComponents, setErroredComponents] = useState<string[]>([]);

  const passError = (componentId: string, error: boolean): void => {
    const existingError = erroredComponents.includes(componentId);
    if (existingError && !error) {
      setErroredComponents(erroredComponents.filter((id) => id !== componentId));
      return;
    }
    if (!existingError && error) {
      setErroredComponents([...erroredComponents, componentId]);
    }
  };

  const registerComponent = (componentId: string, deregister = false): void => {
    let newComponents = [...registeredComponents];
    if (deregister) {
      newComponents = newComponents.filter((id) => id !== componentId);
    } else if (!registeredComponents.includes(componentId)) {
      newComponents = [...newComponents, componentId];
    }
    setRegisteredComponents(newComponents);
  };

  const contextValue: IFormGroupContext = useMemo(() => {
    return {
      registerComponent: registerComponent,
      passError: passError,
    };
  }, [registerComponent, passError]);

  const containsFormElements = registeredComponents.length > 0;
  const containsError = erroredComponents.length > 0;

  return (
    <FormGroupContext.Provider value={contextValue}>
      <div
        className={classNames(className, {
          'nhsuk-form-group': containsFormElements,
          'nhsuk-form-group--error':
            enableErrorLine && containsFormElements ? containsError : false,
        })}
        {...rest}
      >
        {children}
      </div>
    </FormGroupContext.Provider>
  );
};

export default FormGroup;
