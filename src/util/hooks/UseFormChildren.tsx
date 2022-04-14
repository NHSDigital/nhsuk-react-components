import React, { createContext, HTMLProps, useContext, useRef } from 'react';
import { getRandomString } from '../RandomID';

type FormChildData = {
  id: string;
  name: string;
};

type FormChildrenData = {
  count: number;
  children: {
    [reference: string]: FormChildData;
  };
};

type UseFormChildrenReturnType = {
  Provider: React.ComponentType;
};

type FormChildrenContextType = {
  register: (childProps: HTMLProps<HTMLInputElement>) => string;
  getData: (reference: string) => FormChildData | null;
};

const FormChildrenContext = createContext<FormChildrenContextType>({
  register: () => '',
  getData: () => ({ id: '', name: '' }),
});

export const useFormChildren = (id: string, name: string): UseFormChildrenReturnType => {
  const data = useRef<FormChildrenData>({ count: 0, children: {} });

  /**
   * Returns a sequential ID for the child component
   */
  const getChildID = (): string => `${id}-${data.current.count}`;

  /**
   * Sets data about a child component into the form
   */
  const registerChild = (childProps: HTMLProps<HTMLInputElement>): string => {
    const reference = getRandomString();
    if (reference in data.current.children) {
      return registerChild(childProps);
    }

    data.current.count += 1;
    data.current.children[reference] = {
      id: childProps.id || getChildID(),
      name: childProps.name || name || id,
    };

    return reference;
  };

  const getChildData = (reference: string): FormChildData | null => {
    if (reference in data.current.children) {
      return data.current.children[reference];
    }
    return null;
  };

  const FormChildrenContextProvider: React.FC = (props) => (
    <FormChildrenContext.Provider
      value={{ register: registerChild, getData: getChildData }}
      {...props}
    />
  );

  // Reset Reference & Count Data on a render
  data.current = { count: 0, children: {} };

  return {
    Provider: FormChildrenContextProvider,
  };
};

export const useFormChild = (): FormChildrenContextType => useContext(FormChildrenContext);
