import React, { FC, HTMLProps, MutableRefObject, useMemo, useState } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '@util/types/NHSUKTypes';
import HeadingLevel, { HeadingLevelType } from '@util/HeadingLevel';
import FieldsetContext, { IFieldsetContext } from './FieldsetContext';
import { InputType, RegisteredComponent } from '@util/types/FormTypes';

interface LegendProps extends Omit<HTMLProps<HTMLLegendElement>, 'size'> {
  isPageHeading?: boolean;
  headingLevel?: HeadingLevelType;
  size?: NHSUKSize;
}

const Legend: FC<LegendProps> = ({
  className,
  children,
  isPageHeading,
  headingLevel = 'h1',
  size,
  ...rest
}) => (
  <legend
    className={classNames(
      'nhsuk-fieldset__legend',
      {
        'nhsuk-fieldset__legend--xl': isPageHeading && !size,
      },
      { [`nhsuk-fieldset__legend--${size}`]: size },
      className,
    )}
    {...rest}
  >
    {isPageHeading ? (
      <HeadingLevel className="nhsuk-fieldset__heading" headingLevel={headingLevel}>
        {children}
      </HeadingLevel>
    ) : (
      children
    )}
  </legend>
);

interface FieldsetProps extends HTMLProps<HTMLFieldSetElement> {
  fieldsetRef?: MutableRefObject<HTMLFieldSetElement | null>;
  disableErrorLine?: boolean;
  disableFieldsetRenderWithSingleFormElements?: boolean;
}

const FieldSet = ({
  className,
  disableErrorLine,
  fieldsetRef,
  disableFieldsetRenderWithSingleFormElements,
  ...rest
}: FieldsetProps) => {
  const [registeredComponents, setRegisteredComponents] = useState<RegisteredComponent[]>([]);
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

  const registerComponent = (
    componentId: string,
    inputType: InputType,
    deregister = false,
  ): void => {
    setRegisteredComponents((prevComponents) => {
      let newComponents = [...prevComponents];
      if (deregister) {
        newComponents = newComponents.filter((component) => component.elementId !== componentId);
      } else if (!prevComponents.map((c) => c.elementId).includes(componentId)) {
        newComponents = [...newComponents, { elementId: componentId, inputType }];
      }
      return newComponents;
    });
  };

  const contextValue: IFieldsetContext = useMemo(() => {
    return {
      isFieldset: true,
      registerComponent: registerComponent,
      passError: passError,
    };
  }, [registerComponent, passError]);

  const containsFormElements = registeredComponents.length > 0;
  const containsMultipleFormElements =
    registeredComponents.length > 1 ||
    registeredComponents.some(
      (rc) =>
        rc.inputType === 'checkboxes' || rc.inputType === 'dateinput' || rc.inputType === 'radios',
    );
  const containsError = erroredComponents.length > 0;

  return (
    <FieldsetContext.Provider value={contextValue}>
      {containsFormElements ? (
        <div
          className={classNames('nhsuk-form-group', {
            'nhsuk-form-group--error': disableErrorLine ? false : containsError,
          })}
        >
          {containsMultipleFormElements || !disableFieldsetRenderWithSingleFormElements ? (
            <fieldset
              className={classNames('nhsuk-fieldset', className)}
              ref={fieldsetRef}
              {...rest}
            />
          ) : (
            rest.children
          )}
        </div>
      ) : (
        <fieldset className={classNames('nhsuk-fieldset', className)} ref={fieldsetRef} {...rest} />
      )}
    </FieldsetContext.Provider>
  );
};

FieldSet.Legend = Legend;

export default FieldSet;
