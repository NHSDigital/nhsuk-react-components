import classNames from 'classnames';
import { type Checkboxes as CheckboxesModule } from 'nhsuk-frontend';
import { createRef, forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import { CheckboxesDivider, CheckboxesItem } from './components';
import { CheckboxesContext, type ICheckboxesContext } from '.';
import { FormGroup } from '#components/utils';
import { generateRandomName } from '#util/tools';
import { type FormElementProps } from '#util/types';

export interface CheckboxesProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<FormElementProps, 'label' | 'labelProps'> {
  idPrefix?: string;
}

const CheckboxesComponent = forwardRef<HTMLDivElement, CheckboxesProps>((props, forwardedRef) => {
  const { children, idPrefix, ...rest } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
  const [instance, setInstance] = useState<CheckboxesModule>();

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
        const contextValue: ICheckboxesContext = {
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
