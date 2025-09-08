import React from 'react';
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

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  clickable?: boolean;
  cardType?: CardType;
}

interface ICard extends React.FC<CardProps> {
  Content: typeof CardContent;
  Description: typeof CardDescription;
  Image: typeof CardImage;
  Link: typeof CardLink;
  Heading: typeof CardHeading;
  Group: typeof CardGroup;
  GroupItem: typeof CardGroupItem;
}

const Card: ICard = ({ className, clickable, children, cardType, ...rest }) => {
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

Card.Heading = CardHeading;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Link = CardLink;
Card.Content = CardContent;
Card.Group = CardGroup;
Card.GroupItem = CardGroupItem;

export default Card;
