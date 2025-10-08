import {
  isValidElement,
  type FC,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { type CardType, type CareCardType } from './NHSUKTypes.js';

/**
 * Assert that a child item is of the given component type.
 */
export const childIsOfComponentType = <T extends HTMLElement, P extends HTMLAttributes<T>>(
  child: ReactNode,
  component: FC<P>,
): child is ReactElement<P, typeof component> => {
  return isValidElement<typeof component>(child) && child.type === component;
};

/**
 * Check whether the given card type is that of a care card.
 */
export const cardTypeIsCareCard = (cardType: CardType | undefined): cardType is CareCardType =>
  cardType === 'non-urgent' || cardType === 'urgent' || cardType === 'emergency';
