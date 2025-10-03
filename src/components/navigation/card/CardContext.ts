import { createContext } from 'react';
import { CardType } from '#util/types';

export interface ICardContext {
  cardType?: CardType;
}

export const CardContext = createContext<ICardContext>({});
