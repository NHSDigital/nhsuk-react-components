'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import {
  CardContent,
  CardDescription,
  CardGroup,
  CardGroupItem,
  CardHeading,
  CardImage,
  CardLink,
} from './components/index.js';
import { CardContext } from './CardContext.js';
import { cardTypeIsCareCard, type CardType } from '#util/types/index.js';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  clickable?: boolean;
  cardType?: CardType;
}

const CardComponent = forwardRef<HTMLDivElement, CardProps>((props, forwardedRef) => {
  const { className, clickable, children, cardType, ...rest } = props;

  let cardClassNames = classNames(
    'nhsuk-card',
    { 'nhsuk-card--clickable': clickable },
    { 'nhsuk-card--feature': cardType === 'feature' },
    { 'nhsuk-card--secondary': cardType === 'secondary' },
    className,
  );

  if (cardTypeIsCareCard(cardType)) {
    cardClassNames = classNames(
      cardClassNames,
      'nhsuk-card--care',
      `nhsuk-card--care--${cardType}`,
    );
  }

  return (
    <div className={cardClassNames} ref={forwardedRef} {...rest}>
      <CardContext.Provider
        value={{
          cardType,
        }}
      >
        {children}
      </CardContext.Provider>
    </div>
  );
});

CardComponent.displayName = 'Card';

export const Card = Object.assign(CardComponent, {
  Heading: CardHeading,
  Description: CardDescription,
  Image: CardImage,
  Link: CardLink,
  Content: CardContent,
  Group: CardGroup,
  GroupItem: CardGroupItem,
});
