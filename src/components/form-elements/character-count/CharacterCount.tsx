'use client';

import classNames from 'classnames';
import { type CharacterCount as CharacterCountModule } from 'nhsuk-frontend';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export interface CharacterCountProps
  extends
    ComponentPropsWithoutRef<'textarea'>,
    Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'> {
  maxLength?: number;
  maxWords?: number;
  threshold?: number;
}

export const CharacterCount = forwardRef<HTMLTextAreaElement, CharacterCountProps>(
  ({ maxLength, maxWords, threshold, formGroupProps, ...rest }, forwardedRef) => {
    const moduleRef = useRef<HTMLDivElement>(null);
    const importRef = useRef<Promise<CharacterCountModule | void>>(null);
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<CharacterCountModule>();

    useImperativeHandle(formGroupProps?.ref, () => moduleRef.current!, [moduleRef]);

    useEffect(() => {
      if (!moduleRef.current || importRef.current || instance) {
        return;
      }

      importRef.current = import('nhsuk-frontend')
        .then(({ CharacterCount }) => setInstance(new CharacterCount(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, importRef, instance]);

    if (instanceError) {
      throw instanceError;
    }

    return (
      <FormGroup<CharacterCountProps>
        inputType="textarea"
        formGroupProps={{
          ...formGroupProps,
          'className': classNames('nhsuk-character-count', formGroupProps?.className),
          'data-module': 'nhsuk-character-count',
          'data-maxlength': maxLength?.toString(),
          'data-maxwords': maxWords?.toString(),
          'data-threshold': threshold?.toString(),
          'ref': moduleRef,
        }}
        {...rest}
      >
        {({ className, id, error, 'aria-describedby': ariaDescribedBy, ...rest }) => (
          <>
            <textarea
              className={classNames(
                'nhsuk-textarea',
                { 'nhsuk-textarea--error': error },
                'nhsuk-js-character-count',
                className,
              )}
              id={id}
              aria-describedby={`${id}-info ${ariaDescribedBy}`}
              ref={forwardedRef}
              {...rest}
            />
            <div className="nhsuk-hint nhsuk-character-count__message" id={`${id}-info`}>
              {maxWords
                ? `You can enter up to ${maxWords} words`
                : `You can enter up to ${maxLength} characters`}
            </div>
          </>
        )}
      </FormGroup>
    );
  },
);

CharacterCount.displayName = 'CharacterCount';
