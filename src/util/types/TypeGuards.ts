/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

/**
 * Assert that a child item is of the given component type.
 */
export const childIsOfComponentType = (
  child:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined,
  component: React.FC,
): child is
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactPortal =>
  child !== undefined &&
  child !== null &&
  typeof child === 'object' &&
  'type' in child &&
  child.type === component;
