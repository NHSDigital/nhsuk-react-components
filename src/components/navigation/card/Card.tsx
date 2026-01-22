'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { CardContext } from './CardContext.js';
import {
  CardContent,
  CardDescription,
  CardGroup,
  CardGroupItem,
  CardHeading,
  CardImage,
  CardLink,
} from './components/index.js';

import { type CareCardType } from '#util/types/index.js';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  clickable?: boolean;
  feature?: boolean;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  cardType?: CareCardType;
}

const CardComponent = forwardRef<HTMLDivElement, CardProps>((props, forwardedRef) => {
  const {
    className,
    children,
    clickable,
    feature,
    primary,
    secondary,
    warning,
    cardType,
    ...rest
  } = props;

  let cardClassNames = classNames(
    'nhsuk-card',
    { 'nhsuk-card--clickable': clickable },
    { 'nhsuk-card--feature': feature },
    { 'nhsuk-card--primary': primary },
    { 'nhsuk-card--secondary': secondary },
    { 'nhsuk-card--warning': warning },
    className,
  );

  if (cardType) {
    cardClassNames = classNames(
      cardClassNames,
      'nhsuk-card--care',
      `nhsuk-card--care--${cardType}`,
    );
  }

  return (
    <div className={cardClassNames} ref={forwardedRef} {...rest}>
      <CardContext.Provider value={{ cardType }}>{children}</CardContext.Provider>
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
