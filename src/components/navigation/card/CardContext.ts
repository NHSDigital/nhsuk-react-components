import React from 'react';

export interface ICardContext {
  feature: boolean;
  primary: boolean;
  secondary: boolean;
}

const CardContext = React.createContext<ICardContext>({
  feature: false,
  primary: false,
  secondary: false,
});

export default CardContext;
