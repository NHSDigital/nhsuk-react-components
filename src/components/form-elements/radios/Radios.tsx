import React, { HTMLProps, useState } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import { RadiosContext, IRadiosContext } from './RadioContext';
import FormGroup from '@util/FormGroup';
import Divider from './components/Divider';
import Radio from './components/Radio';
import { generateRandomName } from '@util/RandomID';

interface RadiosProps extends HTMLProps<HTMLDivElement>, FormElementProps {
  inline?: boolean;
  idPrefix?: string;
}

const Radios = ({ children, idPrefix, ...rest }: RadiosProps) => {
  const _radioReferences: Array<string> = [];
  let _radioCount = 0;
  let _radioIds: Record<string, string> = {};
  const [selectedRadio, setSelectedRadio] = useState<string>();

  const getRadioId = (id: string, reference: string): string => {
    if (reference in _radioIds) {
      return _radioIds[reference];
    }

    _radioCount += 1;
    _radioIds[reference] = `${idPrefix ?? id}-${_radioCount}`;

    return _radioIds[reference];
  };

  const leaseReference = (): string => {
    let reference: string = '';
    do {
      reference = generateRandomName();
    } while (_radioReferences.includes(reference));

    _radioReferences.push(reference);
    return reference;
  };

  const unleaseReference = (reference: string): void => {
    _radioReferences.splice(_radioReferences.indexOf(reference), 1);
  };

  const setSelected = (radioReference: string): void => {
    setSelectedRadio(radioReference);
  };

  const resetRadioIds = (): void => {
    _radioCount = 0;
    _radioIds = {};
  };

  return (
    <FormGroup<RadiosProps> inputType="radios" {...rest}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {({ className, inline, name, id, error, ...restRenderProps }) => {
        resetRadioIds();
        const contextValue: IRadiosContext = {
          getRadioId: (reference) => getRadioId(id, reference),
          selectedRadio: selectedRadio,
          setSelected: setSelected,
          leaseReference: leaseReference,
          unleaseReference: unleaseReference,
          name,
        };

        return (
          <div
            className={classNames('nhsuk-radios', { 'nhsuk-radios--inline': inline }, className)}
            id={id}
            {...restRenderProps}
          >
            <RadiosContext.Provider value={contextValue}>{children}</RadiosContext.Provider>
          </div>
        );
      }}
    </FormGroup>
  );
};

Radios.Divider = Divider;
Radios.Radio = Radio;

export default Radios;
