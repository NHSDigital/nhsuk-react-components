'use client';

import classNames from 'classnames';
import { type CharacterCount as CharacterCountModule } from 'nhsuk-frontend';
import { createRef, forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export interface CharacterCountProps
  extends ComponentPropsWithoutRef<'textarea'>,
    Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'> {
  maxLength?: number;
  maxWords?: number;
  threshold?: number;
}

export const CharacterCount = forwardRef<HTMLTextAreaElement, CharacterCountProps>(
  ({ maxLength, maxWords, threshold, formGroupProps, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => formGroupProps?.ref || createRef<HTMLDivElement>());
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<CharacterCountModule>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
        return;
      }

      import('nhsuk-frontend')
        .then(({ CharacterCount }) => setInstance(new CharacterCount(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, instance]);

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
          'data-maxlength': maxLength,
          'data-maxwords': maxWords,
          'data-threshold': threshold,
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
