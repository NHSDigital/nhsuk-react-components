'use client';

import classNames from 'classnames';
import { type SkipLink as SkipLinkModule } from 'nhsuk-frontend';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

export type SkipLinkProps = ComponentPropsWithoutRef<'a'>;

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>((props, forwardedRef) => {
  const { children = 'Skip to main content', className, href = '#maincontent', ...rest } = props;

  const moduleRef = useRef<HTMLAnchorElement>(null);
  const importRef = useRef<Promise<SkipLinkModule | void>>(null);
  const [instanceError, setInstanceError] = useState<Error>();
  const [instance, setInstance] = useState<SkipLinkModule>();

  useImperativeHandle(forwardedRef, () => moduleRef.current!, [moduleRef]);

  useEffect(() => {
    if (!moduleRef.current || importRef.current || instance) {
      return;
    }

    importRef.current = import('nhsuk-frontend')
      .then(({ SkipLink }) => setInstance(new SkipLink(moduleRef.current)))
      .catch(setInstanceError);
  }, [moduleRef, importRef, instance]);

  if (instanceError) {
    throw instanceError;
  }

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
