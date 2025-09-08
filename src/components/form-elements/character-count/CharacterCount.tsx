'use client';
import React, { FC, useEffect } from 'react';
import { createAll, CharacterCount } from 'nhsuk-frontend';
import { HTMLAttributesWithData } from '@util/types/NHSUKTypes';

export enum CharacterCountType {
  Characters,
  Words,
}

type CharacterCountProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  maxLength: number;
  countType: CharacterCountType;
  textAreaId: string;
  thresholdPercent?: number;
};

const CharacterCountComponent: FC<CharacterCountProps> = ({
  children,
  maxLength,
  countType,
  textAreaId,
  thresholdPercent,
  ...rest
}) => {
  useEffect(() => {
    createAll(CharacterCount);
  }, []);

  const characterCountProps: HTMLAttributesWithData<HTMLDivElement> =
    countType === CharacterCountType.Characters
      ? { ...rest, ['data-maxlength']: maxLength }
      : { ...rest, ['data-maxwords']: maxLength };

  if (thresholdPercent) {
    characterCountProps['data-threshold'] = thresholdPercent;
  }

  return (
    <div
      className="nhsuk-character-count"
      data-module="nhsuk-character-count"
      {...characterCountProps}
    >
      <div className="nhsuk-form-group">{children}</div>

      <div className="nhsuk-hint nhsuk-character-count__message" id={`${textAreaId}-info`}>
        You can enter up to {maxLength} characters
      </div>
    </div>
  );
};

export default CharacterCountComponent;
