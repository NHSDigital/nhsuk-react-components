import classNames from 'classnames';
import { type Radios as RadiosModule } from 'nhsuk-frontend';
import { createRef, forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import { RadiosDivider, RadiosItem } from './components';
import { RadiosContext, type IRadiosContext } from '.';
import { FormGroup } from '#components/utils';
import { generateRandomName } from '#util/tools';
import { type FormElementProps } from '#util/types';

export interface RadiosProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<FormElementProps, 'label' | 'labelProps'> {
  inline?: boolean;
  idPrefix?: string;
}

const RadiosComponent = forwardRef<HTMLDivElement, RadiosProps>((props, forwardedRef) => {
  const { children, idPrefix, ...rest } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
  const [instance, setInstance] = useState<RadiosModule>();
  const [selectedRadio, setSelectedRadio] = useState<string>();

  const _radioReferences: Array<string> = [];
  let _radioCount = 0;
  let _radioIds: Record<string, string> = {};

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      return;
    }

    const { current: $root } = moduleRef;

    import('nhsuk-frontend').then(({ Radios }) => {
      setInstance(new Radios($root));
    });
  }, [moduleRef, instance]);

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
            data-module="nhsuk-radios"
            id={id}
            ref={moduleRef}
            {...restRenderProps}
          >
            <RadiosContext.Provider value={contextValue}>{children}</RadiosContext.Provider>
          </div>
        );
      }}
    </FormGroup>
  );
});

RadiosComponent.displayName = 'Radios';

export const Radios = Object.assign(RadiosComponent, {
  Item: RadiosItem,
  Divider: RadiosDivider,
});
