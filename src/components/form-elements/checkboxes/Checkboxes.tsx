import React, { ComponentPropsWithoutRef, createRef, forwardRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import FormGroup from '@components/utils/FormGroup';
import CheckboxContext, { ICheckboxContext } from './CheckboxContext';
import CheckboxesItem from './components/Item';
import CheckboxesDivider from './components/Divider';
import { generateRandomName } from '@util/RandomID';
import { type Checkboxes } from 'nhsuk-frontend';

export interface CheckboxesProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<FormElementProps, 'label' | 'labelProps'> {
  idPrefix?: string;
}

const CheckboxesComponent = forwardRef<HTMLDivElement, CheckboxesProps>((props, forwardedRef) => {
  const { children, idPrefix, ...rest } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
  const [instance, setInstance] = useState<Checkboxes>();

  const _boxReferences: string[] = [];
  let _boxCount: number = 0;
  let _boxIds: Record<string, string> = {};

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      return;
    }

    const { current: $root } = moduleRef;

    import('nhsuk-frontend').then(({ Checkboxes }) => {
      setInstance(new Checkboxes($root));
    });
  }, [moduleRef, instance]);

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

  return (
    <FormGroup<CheckboxesProps> inputType="checkboxes" {...rest}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {({ className, name, id, idPrefix, error, ...restRenderProps }) => {
        resetCheckboxIds();
        const contextValue: ICheckboxContext = {
          name,
          getBoxId: (reference) => getBoxId(id, reference),
          leaseReference,
          unleaseReference,
        };
        return (
          <div
            className={classNames('nhsuk-checkboxes', className)}
            data-module="nhsuk-checkboxes"
            id={id}
            ref={moduleRef}
            {...restRenderProps}
          >
            <CheckboxContext.Provider value={contextValue}>{children}</CheckboxContext.Provider>
          </div>
        );
      }}
    </FormGroup>
  );
});

CheckboxesComponent.displayName = 'Checkboxes';

export default Object.assign(CheckboxesComponent, {
  Item: CheckboxesItem,
  Divider: CheckboxesDivider,
});
