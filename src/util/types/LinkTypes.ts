import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ElementType } from 'react';

export type AsElementLink<T extends HTMLElement> = (T extends HTMLButtonElement
  ? ButtonHTMLAttributes<T>
  : AnchorHTMLAttributes<T>) & {
  asElement?: ElementType;
  to?: string;
};
