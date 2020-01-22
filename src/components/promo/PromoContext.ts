import { createContext } from 'react';

export interface PromoContextType {
  isGroup: boolean;
  promoCount: number;
}

const PromoContext = createContext<PromoContextType>({ isGroup: false, promoCount: 0 });

export default PromoContext;
