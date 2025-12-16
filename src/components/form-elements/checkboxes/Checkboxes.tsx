'use client';

import classNames from 'classnames';
import { type Checkboxes as CheckboxesModule } from 'nhsuk-frontend';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

import { CheckboxesContext, type ICheckboxesContext } from './CheckboxesContext.js';
import { CheckboxesDivider, CheckboxesItem } from './components/index.js';

import { FormGroup } from '#components/utils/index.js';
import { generateRandomName } from '#util/tools/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export interface CheckboxesElementProps extends ComponentPropsWithoutRef<'div'> {
  idPrefix?: string;
  small?: boolean;
}

export type CheckboxesProps = CheckboxesElementProps &
  Omit<FormElementProps<CheckboxesElementProps, 'div'>, 'label' | 'labelProps'>;

const CheckboxesComponent = forwardRef<HTMLDivElement, CheckboxesProps>((props, forwardedRef) => {
  const { children, idPrefix, ...rest } = props;

  const moduleRef = useRef<HTMLDivElement>(null);
  const importRef = useRef<Promise<CheckboxesModule | void>>(null);
  const [instanceError, setInstanceError] = useState<Error>();
  const [instance, setInstance] = useState<CheckboxesModule>();

  const _boxReferences: string[] = [];
  let _boxCount: number = 0;
  let _boxIds: Record<string, string> = {};

  useImperativeHandle(forwardedRef, () => moduleRef.current!, [moduleRef]);

  useEffect(() => {
    if (!moduleRef.current || importRef.current || instance) {
      return;
    }

    importRef.current = import('nhsuk-frontend')
      .then(({ Checkboxes }) => setInstance(new Checkboxes(moduleRef.current)))
      .catch(setInstanceError);
  }, [moduleRef, importRef, instance]);

  const getBoxId = (id: string, reference: string): string => {
    if (reference in _boxIds) {
      return _boxIds[reference];
    }
    _boxCount++;
    _boxIds[reference] = `${idPrefix ?? id}-${_boxCount}`;

    return _boxIds[reference];
  };

  const leaseReference = (): string => {
    let reference: string = '';
    do {
      reference = generateRandomName();
    } while (_boxReferences.includes(reference));

    _boxReferences.push(reference);
    return reference;
  };

  const unleaseReference = (reference: string): void => {
    _boxReferences.splice(_boxReferences.indexOf(reference), 1);
  };

  const resetCheckboxIds = (): void => {
    _boxCount = 0;
    _boxIds = {};
  };

  if (instanceError) {
    throw instanceError;
  }

  return (
    <FormGroup<CheckboxesProps, 'div'> inputType="checkboxes" {...rest}>
      {({ className, small, name, id, idPrefix, error, ...restRenderProps }) => {
        resetCheckboxIds();
        const contextValue: ICheckboxesContext = {
          name,
          getBoxId: (reference) => getBoxId(id, reference),
          leaseReference,
          unleaseReference,
        };
        return (
          <div
            className={classNames(
              'nhsuk-checkboxes',
              { 'nhsuk-checkboxes--small': small },
              className,
            )}
            data-module="nhsuk-checkboxes"
            id={id}
            ref={moduleRef}
            {...restRenderProps}
          >
            <CheckboxesContext.Provider value={contextValue}>{children}</CheckboxesContext.Provider>
          </div>
        );
      }}
    </FormGroup>
  );
});

CheckboxesComponent.displayName = 'Checkboxes';

export const Checkboxes = Object.assign(CheckboxesComponent, {
  Item: CheckboxesItem,
  Divider: CheckboxesDivider,
});
