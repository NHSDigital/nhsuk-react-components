import { createContext } from 'react';

export type IFieldsetContext = {
  isFieldset: boolean;
  passError: (componentId: string, error: boolean) => void;
  registerComponent: (componentId: string, deregister?: boolean) => void;
};

const FieldsetContext = createContext<IFieldsetContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  isFieldset: false,
  passError: () => {},
  registerComponent: () => {},
});

export default FieldsetContext;
