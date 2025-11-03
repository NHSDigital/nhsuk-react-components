'use client';

import { createContext } from 'react';

import { type CardType } from '#util/types/index.js';

export interface ICardContext {
  cardType?: CardType;
}

export const CardContext = createContext<ICardContext>({});
