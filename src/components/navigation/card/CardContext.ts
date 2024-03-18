import { CardType } from '@util/types/NHSUKTypes';
import { createContext } from 'react';

export interface ICardContext {
  cardType?: CardType;
}

const CardContext = createContext<ICardContext>({});

export default CardContext;
