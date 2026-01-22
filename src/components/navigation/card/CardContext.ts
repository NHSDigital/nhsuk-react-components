'use client';

import { createContext } from 'react';

import { type CareCardType } from '#util/types/index.js';

export interface ICardContext {
  cardType?: CareCardType;
}

export const CardContext = createContext<ICardContext>({});
