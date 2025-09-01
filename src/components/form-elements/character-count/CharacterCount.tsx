'use client';
import React, { FC, HTMLProps, useEffect, useRef, useState } from 'react';
import { CharacterCount } from 'nhsuk-frontend';

type CharacterCountProps = HTMLProps<HTMLDivElement> & {
  maxLength?: number;
  maxWords?: number;
  textAreaId: string;
  threshold?: number;
};

const CharacterCountComponent: FC<CharacterCountProps> = ({
  children,
  maxLength,
  maxWords,
  textAreaId,
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
    <div
      className="nhsuk-character-count"
      data-module="nhsuk-character-count"
      data-maxlength={maxLength}
      data-maxwords={maxWords}
      data-threshold={threshold}
      ref={moduleRef}
      {...rest}
    >
      <div className="nhsuk-form-group">{children}</div>

      <div className="nhsuk-hint nhsuk-character-count__message" id={`${textAreaId}-info`}>
        You can enter up to {maxLength} characters
      </div>
    </div>
  );
};

CharacterCountComponent.displayName = 'CharacterCount';

export default CharacterCountComponent;
