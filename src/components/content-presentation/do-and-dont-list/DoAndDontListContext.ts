'use client';

import { createContext } from 'react';

export type DoAndDontListType = 'do' | 'dont';

export const DoAndDontListContext = createContext<DoAndDontListType>('do');
