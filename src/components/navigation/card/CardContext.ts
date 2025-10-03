import { createContext } from 'react';
import { type CardType } from '#util/types';

export interface ICardContext {
  cardType?: CardType;
}

export const CardContext = createContext<ICardContext>({});
