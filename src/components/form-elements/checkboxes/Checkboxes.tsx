'use client';

import React, { HTMLProps, useEffect } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import SingleInputFormGroup from '@components/utils/SingleInputFormGroup';
import CheckboxContext, { ICheckboxContext } from './CheckboxContext';
import Box from './components/Box';
import Divider from './components/Divider';
import { generateRandomName } from '@util/RandomID';
import CheckboxJs from '@resources/checkboxes';

interface CheckboxesProps extends HTMLProps<HTMLDivElement>, FormElementProps {
  idPrefix?: string;
}

const Checkboxes = ({ children, idPrefix, ...rest }: CheckboxesProps) => {
  const _boxReferences: string[] = [];
  let _boxCount: number = 0;
  let _boxIds: Record<string, string> = {};

  useEffect(() => {
    CheckboxJs();
  }, []);

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
    <SingleInputFormGroup<CheckboxesProps> inputType="checkboxes" {...rest}>
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
          <div className={classNames('nhsuk-checkboxes', className)} id={id} {...restRenderProps}>
            <CheckboxContext.Provider value={contextValue}>{children}</CheckboxContext.Provider>
          </div>
        );
      }}
    </SingleInputFormGroup>
  );
};

Checkboxes.Box = Box;
Checkboxes.Divider = Divider;

export default Checkboxes;
