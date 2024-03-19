'use client';
import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import CardContext from '../CardContext';

const CardContent: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  const { feature } = useContext(CardContext);
  return (
    <div
      className={classNames(
        'nhsuk-card__content',
        { 'nhsuk-card__content--feature': feature },
        className,
      )}
      {...rest}
    />
  );
};

export default CardContent;
