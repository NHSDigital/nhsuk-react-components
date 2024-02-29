import React from 'react';

export interface ICardContext {
  feature: boolean;
}

const CardContext = React.createContext<ICardContext>({
  feature: false,
});

export default CardContext;
