/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type FC,
  type JSXElementConstructor,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from 'react';
import { type CardType, type CareCardType } from './NHSUKTypes';

/**
 * Assert that a child item is of the given component type.
 */
export const childIsOfComponentType = (
  child:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined,
  component: FC,
): child is ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal =>
  child !== undefined &&
  child !== null &&
  typeof child === 'object' &&
  'type' in child &&
  child.type === component;

/**
 * Check whether the given card type is that of a care card.
 */
export const cardTypeIsCareCard = (cardType: CardType | undefined): cardType is CareCardType =>
  cardType === 'non-urgent' || cardType === 'urgent' || cardType === 'emergency';
