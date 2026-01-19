'use client';

import classNames from 'classnames';
import { type Radios as RadiosModule } from 'nhsuk-frontend';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

import { RadiosContext, type IRadiosContext } from './RadiosContext.js';
import { RadiosDivider, RadiosItem } from './components/index.js';

import { FormGroup } from '#components/utils/index.js';
import { generateRandomName } from '#util/tools/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export interface RadiosElementProps extends ComponentPropsWithoutRef<'div'> {
  idPrefix?: string;
  inline?: boolean;
  small?: boolean;
}

export type RadiosProps = RadiosElementProps &
  Omit<FormElementProps<RadiosElementProps, 'div'>, 'label' | 'labelProps'>;

const RadiosComponent = forwardRef<HTMLDivElement, RadiosProps>((props, forwardedRef) => {
  const { children, idPrefix, ...rest } = props;

  const moduleRef = useRef<HTMLDivElement>(null);
  const importRef = useRef<Promise<RadiosModule | void>>(null);
  const [instanceError, setInstanceError] = useState<Error>();
  const [instance, setInstance] = useState<RadiosModule>();
  const [selectedRadio, setSelectedRadio] = useState<string>();

  const _radioReferences: Array<string> = [];
  let _radioCount = 0;
  let _radioIds: Record<string, string> = {};

  useImperativeHandle(forwardedRef, () => moduleRef.current!, [moduleRef]);

  useEffect(() => {
    if (!moduleRef.current || importRef.current || instance) {
      return;
    }

    importRef.current = import('nhsuk-frontend')
      .then(({ Radios }) => setInstance(new Radios(moduleRef.current)))
      .catch(setInstanceError);
  }, [moduleRef, importRef, instance]);

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

  if (instanceError) {
    throw instanceError;
  }

  return (
    <FormGroup<RadiosProps, 'div'> inputType="radios" {...rest}>
      {({ className, inline, small, name, id, error, ...restRenderProps }) => {
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
            className={classNames(
              'nhsuk-radios',
              {
                'nhsuk-radios--inline': inline,
                'nhsuk-radios--small': small,
              },
              className,
            )}
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
