'use client';

import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef } from 'react';

import { CardContext } from './CardContext.js';
import {
  CardDescription,
  CardGroup,
  CardGroupItem,
  CardHeadingContainer,
  CardHeading,
  CardImage,
  CardLink,
} from './components/index.js';

import { ChevronRightCircleIcon } from '#components/content-presentation/icons/individual/index.js';
import { childIsOfComponentType, type CareCardType } from '#util/types/index.js';

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

  const items = Children.toArray(children);

  // Allow single image
  const imageItem = items.find((child) => childIsOfComponentType(child, CardImage));

  // Allow single heading
  const headingItem = items.find((child) => childIsOfComponentType(child, CardHeading));

  // Only content items remain
  const contentItems = items.filter((child) => child !== imageItem && child !== headingItem);

  return (
    <div
      className={classNames(
        'nhsuk-card',
        { 'nhsuk-card--clickable': clickable },
        { 'nhsuk-card--feature': feature },
        { 'nhsuk-card--primary': primary },
        { 'nhsuk-card--secondary': secondary },
        { 'nhsuk-card--warning': warning },
        { 'nhsuk-card--care': cardType },
        { [`nhsuk-card--care--${cardType}`]: cardType },
        className,
      )}
      ref={forwardedRef}
      {...rest}
    >
      <CardContext.Provider value={{ cardType }}>
        {cardType ? (
          <>
            {imageItem}
            {headingItem ? <CardHeadingContainer>{headingItem}</CardHeadingContainer> : null}
            {contentItems.length ? <div className="nhsuk-card__content">{contentItems}</div> : null}
          </>
        ) : (
          <>
            {imageItem}
            {headingItem || contentItems.length ? (
              <div className="nhsuk-card__content">
                {headingItem}
                {contentItems}
                {primary ? <ChevronRightCircleIcon /> : null}
              </div>
            ) : null}
          </>
        )}
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
  Group: CardGroup,
  GroupItem: CardGroupItem,
});
