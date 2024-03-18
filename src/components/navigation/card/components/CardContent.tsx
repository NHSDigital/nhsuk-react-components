'use client';
import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import CardContext from '../CardContext';

const CardContent: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  const { feature, primary, secondary } = useContext(CardContext);
  return (
    <div
      className={classNames(
        'nhsuk-card__content',
        { 'nhsuk-card__content--feature': feature },
        { 'nhsuk-card__content--primary': primary },
        { 'nhsuk-card__content--secondary': secondary },
        className,
      )}
      {...rest}
    />
  );
};

export default CardContent;
