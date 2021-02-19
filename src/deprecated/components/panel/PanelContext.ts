import { createContext } from 'react';

export interface PanelContextType {
  panelCount: number;
}

const PanelContext = createContext<PanelContextType | null>(null);

export default PanelContext;
