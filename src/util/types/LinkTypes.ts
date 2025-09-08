import type * as React from 'react';

/** Plain anchor props with an optional `to` alias (for routers) */
export type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  to?: string;
};

/**
 * Polymorphic “asElement” props.
 * Use the tag/component type (e.g. 'a', 'button', LinkComponent), not HTMLAnchorElement.
 */
export type AsElementLink<E extends React.ElementType = 'a'> = {
  /** Override the rendered element, e.g. 'a' | 'button' | RouterLink */
  asElement?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, 'ref'>;
