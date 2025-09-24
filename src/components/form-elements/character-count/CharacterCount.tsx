'use client';
import React, { ComponentPropsWithoutRef, FC, useEffect, useRef, useState } from 'react';
import { CharacterCount } from 'nhsuk-frontend';
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

const CharacterCountComponent: FC<CharacterCountProps> = ({
  children,
  maxLength,
  maxWords,
  threshold,
  ...rest
}) => {
  const moduleRef = useRef<HTMLDivElement>(null);
  const [instance, setInstance] = useState<CharacterCount>();

  useEffect(() => {
    if (!moduleRef.current || instance) {
      return;
    }

    setInstance(new CharacterCount(moduleRef.current));
  }, [moduleRef, instance]);

  return (
    <FormGroup<CharacterCountProps>
      inputType="textarea"
      formGroupProps={{
        className: 'nhsuk-character-count',
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
            {...rest}
          />
          <div className="nhsuk-hint nhsuk-character-count__message" id={`${id}-info`}>
            {maxWords
              ? `You can enter up to ${maxWords} words`
              : `You can enter up to ${maxLength} characters`}
          </div>
          {children}
        </>
      )}
    </FormGroup>
  );
};

CharacterCountComponent.displayName = 'CharacterCount';

export default CharacterCountComponent;
