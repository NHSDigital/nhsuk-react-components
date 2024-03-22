'use client';
import React, { FC, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import CardContext from '../CardContext';

const CardContent: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  const { cardType } = useContext(CardContext);
  return (
    <div
      className={classNames(
        'nhsuk-card__content',
        { 'nhsuk-card__content--feature': cardType === 'feature' },
        { 'nhsuk-card__content--primary': cardType === 'primary' },
        { 'nhsuk-card__content--secondary': cardType === 'secondary' },
        className,
      )}
      {...rest}
    />
  );
};

export default CardContent;
