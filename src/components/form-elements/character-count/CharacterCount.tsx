import React, { ComponentPropsWithoutRef, createRef, forwardRef, useEffect, useState } from 'react';
import { type CharacterCount } from 'nhsuk-frontend';
import classNames from 'classnames';
import FormGroup from '@components/utils/FormGroup';
import { FormElementProps } from '@util/types/FormTypes';

export interface CharacterCountProps
  extends ComponentPropsWithoutRef<'textarea'>,
    Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'> {
  maxLength?: number;
  maxWords?: number;
  threshold?: number;
}

const CharacterCountComponent = forwardRef<HTMLTextAreaElement, CharacterCountProps>(
  ({ maxLength, maxWords, threshold, formGroupProps, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => formGroupProps?.ref || createRef<HTMLDivElement>());
    const [instance, setInstance] = useState<CharacterCount>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
        return;
      }

      const { current: $root } = moduleRef;

      import('nhsuk-frontend').then(({ CharacterCount }) => {
        setInstance(new CharacterCount($root));
      });
    }, [moduleRef, instance]);

    return (
      <FormGroup<CharacterCountProps>
        inputType="textarea"
        formGroupProps={{
          ...formGroupProps,
          className: classNames('nhsuk-character-count', formGroupProps?.className),
          'data-module': 'nhsuk-character-count',
          'data-maxlength': maxLength,
          'data-maxwords': maxWords,
          'data-threshold': threshold,
          ref: moduleRef,
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

CharacterCountComponent.displayName = 'CharacterCount';

export default CharacterCountComponent;
