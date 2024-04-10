'use client';
import React, { FC, useEffect } from 'react';
import CharacterCountJs from 'nhsuk-frontend/packages/components/character-count/character-count';
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

const CharacterCount: FC<CharacterCountProps> = ({
  children,
  maxLength,
  countType,
  textAreaId,
  thresholdPercent,
  ...rest
}) => {
  useEffect(() => {
    CharacterCountJs.default ? CharacterCountJs.default() : CharacterCountJs();
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

export default CharacterCount;
