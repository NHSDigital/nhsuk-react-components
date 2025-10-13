'use client';

import { useContext, type ComponentPropsWithoutRef, type FC } from 'react';
import { HeaderContext, type IHeaderContext } from '../HeaderContext.js';

export type HeaderServiceNameInnerProps = NonNullable<IHeaderContext['serviceProps']>;
export type HeaderServiceNameProps = Pick<ComponentPropsWithoutRef<'div'>, 'children'>;

const HeaderServiceNameInner: FC<HeaderServiceNameInnerProps> = (service) =>
  service.href ? (
    <a className="nhsuk-header__service-name" href={service.href}>
      {service.text}
    </a>
  ) : (
    <span className="nhsuk-header__service-name">{service.text}</span>
  );

export const HeaderServiceName: FC<HeaderServiceNameProps> = ({ children }) => {
  const {
    logoProps: logo,
    organisationProps: organisation,
    serviceProps: service,
  } = useContext<IHeaderContext>(HeaderContext);

  // The NHS logo and service name are combined into a single link if either
  // the logo doesn’t have an `href` set but the service name does, or if both
  // have an exact `href`. This avoids having 2 links to same destination.
  const combineLogoAndServiceNameLinks =
    (service?.href && !logo?.href) || (!!service?.href && service.href == logo?.href);

  const logoAlt = logo?.alt ?? 'NHS';
  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo?.href;

  const logoAriaLabel =
    logo?.['aria-label'] ??
    [
      logoAlt,
      organisation?.name,
      organisation?.split,
      combineLogoAndServiceNameLinks ? service.text : '',
      'homepage',
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <div className="nhsuk-header__service">
      {logoHref ? (
        <a className="nhsuk-header__service-logo" href={logoHref} aria-label={logoAriaLabel}>
          {children}
          {combineLogoAndServiceNameLinks ? <HeaderServiceNameInner text={service.text} /> : null}
        </a>
      ) : (
        <>
          {children}
          {combineLogoAndServiceNameLinks ? <HeaderServiceNameInner text={service.text} /> : null}
        </>
      )}
      {service?.text && !combineLogoAndServiceNameLinks ? (
        <HeaderServiceNameInner {...service} />
      ) : null}
    </div>
  );
};
