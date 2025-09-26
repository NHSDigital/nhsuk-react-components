import React, { ComponentPropsWithoutRef, forwardRef, useContext } from 'react';
import classNames from 'classnames';
import CardContext from '../CardContext';

export type CardContentProps = ComponentPropsWithoutRef<'div'>;

const CardContent = forwardRef<HTMLDivElement, CardContentProps>((props, forwardedRef) => {
  const { cardType } = useContext(CardContext);
  const { className, ...rest } = props;

  return (
    <div
      className={classNames(
        'nhsuk-card__content',
        { 'nhsuk-card__content--feature': cardType === 'feature' },
        { 'nhsuk-card__content--primary': cardType === 'primary' },
        { 'nhsuk-card__content--secondary': cardType === 'secondary' },
        className,
      )}
      ref={forwardedRef}
      {...rest}
    />
  );
});

CardContent.displayName = 'Card.Content';

export default CardContent;
