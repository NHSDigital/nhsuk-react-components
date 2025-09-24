import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import CardContext from './CardContext';
import CardContent from './components/CardContent';
import CardDescription from './components/CardDescription';
import CardImage from './components/CardImage';
import CardLink from './components/CardLink';
import CardHeading from './components/CardHeading';
import CardGroup from './components/CardGroup';
import CardGroupItem from './components/CardGroupItem';
import { CardType } from '@util/types/NHSUKTypes';
import { cardTypeIsCareCard } from '@util/types/TypeGuards';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  clickable?: boolean;
  cardType?: CardType;
}

const CardComponent: FC<CardProps> = ({ className, clickable, children, cardType, ...rest }) => {
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
    <div className={cardClassNames} {...rest}>
      <CardContext.Provider
        value={{
          cardType,
        }}
      >
        {children}
      </CardContext.Provider>
    </div>
  );
};

CardComponent.displayName = 'Card';

export default Object.assign(CardComponent, {
  Heading: CardHeading,
  Description: CardDescription,
  Image: CardImage,
  Link: CardLink,
  Content: CardContent,
  Group: CardGroup,
  GroupItem: CardGroupItem,
});
