import { useContext, useEffect, type FC } from 'react';
import { HeaderContext, type IHeaderContext } from '../HeaderContext.js';

export type LogoProps = NonNullable<IHeaderContext['logoProps']>;

export const Logo: FC<LogoProps> = (logo) => {
  const { organisationProps: organisation, setLogoProps } =
    useContext<IHeaderContext>(HeaderContext);

  useEffect(() => {
    if (!logo) {
      return;
    }

    setLogoProps(logo);
    return () => setLogoProps(undefined);
  }, [logo, setLogoProps]);

  const { alt = 'NHS' } = logo;

  return (
    <>
      {logo.src ? (
        <img className="nhsuk-header__organisation-logo" src={logo.src} width="280" alt={alt} />
      ) : (
        <svg
          className="nhsuk-header__logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 80"
          height="40"
          width="100"
          focusable="false"
          role="img"
          aria-label={alt}
        >
          <title>{alt}</title>
          <path
            fill="currentcolor"
            d="M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          />
        </svg>
      )}
      {organisation ? (
        <>
          <span className="nhsuk-header__organisation-name">
            {organisation.name}
            {organisation.split ? (
              <span className="nhsuk-header__organisation-name-split">{organisation.split}</span>
            ) : null}
          </span>
          {organisation.descriptor ? (
            <span className="nhsuk-header__organisation-name-descriptor">
              {organisation.descriptor}
            </span>
          ) : null}
        </>
      ) : null}
    </>
  );
};

Logo.displayName = 'Header.Logo';
