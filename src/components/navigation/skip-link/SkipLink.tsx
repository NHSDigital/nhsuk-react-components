import React, { ComponentPropsWithoutRef, createRef, forwardRef, useEffect, useState } from 'react';
import { SkipLink } from 'nhsuk-frontend';
import classNames from 'classnames';

export type SkipLinkProps = ComponentPropsWithoutRef<'a'>;

const SkipLinkComponent = forwardRef<HTMLAnchorElement, SkipLinkProps>((props, forwardedRef) => {
  const { children = 'Skip to main content', className, href = '#maincontent', ...rest } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLAnchorElement>());
  const [instance, setInstance] = useState<SkipLink>();

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      return;
    }

    setInstance(new SkipLink(moduleRef.current));
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

SkipLinkComponent.displayName = 'SkipLink';

export default SkipLinkComponent;
