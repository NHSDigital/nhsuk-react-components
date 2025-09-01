import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import { SkipLink } from 'nhsuk-frontend';
import classNames from 'classnames';

const SkipLinkComponent = ({
  children = 'Skip to main content',
  className,
  href = '#maincontent',
  ...rest
}: ComponentProps<'a'>) => {
  const moduleRef = useRef<HTMLAnchorElement>(null);
  const [instance, setInstance] = useState<SkipLink>();

  useEffect(() => {
    if (!moduleRef.current || instance) {
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
};

SkipLinkComponent.displayName = 'SkipLink';

export default SkipLinkComponent;
