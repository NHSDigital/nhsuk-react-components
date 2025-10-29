import { type ComponentProps, type ElementType } from 'react';

export type NHSUKSize = 's' | 'm' | 'l' | 'xl';

export type InputWidth = '2' | '3' | '4' | '5' | '10' | '20' | '30' | 2 | 3 | 4 | 5 | 10 | 20 | 30;

export type CareCardType = 'non-urgent' | 'urgent' | 'emergency';

export type CardType = 'feature' | 'primary' | 'secondary' | CareCardType;

export type ColWidth =
  | 'full'
  | 'three-quarters'
  | 'one-half'
  | 'two-thirds'
  | 'one-third'
  | 'one-quarter';

export type ComponentPropsWithDataAttributes<T extends ElementType> = ComponentProps<T> & {
  [key: `data-${string}`]: string | undefined;
};
