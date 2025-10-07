'use client';

import classNames from 'classnames';
import { type SkipLink as SkipLinkModule } from 'nhsuk-frontend';
import { createRef, forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from 'react';

export type SkipLinkProps = ComponentPropsWithoutRef<'a'>;

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>((props, forwardedRef) => {
  const { children = 'Skip to main content', className, href = '#maincontent', ...rest } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLAnchorElement>());
  const [instance, setInstance] = useState<SkipLinkModule>();

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      return;
    }

    const { current: $root } = moduleRef;

    import('nhsuk-frontend').then(({ SkipLink }) => {
      setInstance(new SkipLink($root));
    });
  }, [moduleRef, instance]);

  return (
    <a
      href={href}
      className={classNames('nhsuk-skip-link', className)}
      data-module="nhsuk-skip-link"
      ref={moduleRef}
      {...rest}
    >
      {children}
    </a>
  );
});

SkipLink.displayName = 'SkipLink';
