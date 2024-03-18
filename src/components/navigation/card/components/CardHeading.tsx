'use client';
import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '@util/HeadingLevel';
import CardContext from '../CardContext';

interface CardHeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
}

const CardHeading: React.FC<CardHeadingProps> = ({ className, headingLevel = 'h2', ...rest }) => {
  const { cardType } = useContext(CardContext);
  return (
    <HeadingLevel
      className={classNames(
        'nhsuk-card__heading',
        { 'nhsuk-card__heading--feature': cardType === 'feature' },
        className,
      )}
      headingLevel={headingLevel}
      {...rest}
    />
  );
};

export default CardHeading;
