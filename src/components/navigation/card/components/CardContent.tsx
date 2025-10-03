import classNames from 'classnames';
import { forwardRef, useContext, type ComponentPropsWithoutRef } from 'react';
import { CardContext } from '..';

export type CardContentProps = ComponentPropsWithoutRef<'div'>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>((props, forwardedRef) => {
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
