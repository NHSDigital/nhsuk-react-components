import {
  isValidElement,
  type FC,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';

type WithProps<T extends ReactElement> = T & {
  props: HTMLAttributes<T>;
};

/**
 * Assert that a child item is a valid component with props.
 */
const isValidComponent = <T extends ReactNode>(
  child: T,
): child is WithProps<Extract<T, ReactElement>> =>
  isValidElement(child) && !!child.props && typeof child.props === 'object';

/**
 * Assert that a child item is of the given component type, optionally
 * checking via props for lazy or deferred server components.
 */
export const childIsOfComponentType = <T extends HTMLElement, P extends HTMLAttributes<T>>(
  child: ReactNode,
  component: FC<P>,
  fallback?: Required<Pick<P, 'className'>>,
): child is ReactElement<P, typeof component> => {
  if (!isValidComponent(child)) {
    return false;
  }

  // Check type for client only components
  if (child.type === component) {
    return true;
  }

  // Check props for lazy or deferred server components
  return child.props.className && fallback?.className
    ? child.props.className.split(' ').includes(fallback.className)
    : false;
};
