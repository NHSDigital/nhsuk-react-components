import classNames from 'classnames';
import { useContext, useEffect, type ComponentPropsWithoutRef, type FC } from 'react';
import { HeaderContext, type IHeaderContext } from '../HeaderContext';
import { MenuToggle } from './MenuToggle';
import { Container } from '#components/layout';

export interface NavigationProps extends ComponentPropsWithoutRef<'nav'> {
  white?: boolean;
  open?: boolean;
}

export const Navigation: FC<NavigationProps> = ({
  className,
  children,
  white,
  open,
  'aria-label': ariaLabel = 'Menu',
  ...rest
}) => {
  const { setMenuOpen } = useContext<IHeaderContext>(HeaderContext);

  useEffect(() => {
    if (open === undefined) {
      return;
    }

    setMenuOpen(open);
    return () => setMenuOpen(false);
  }, [open]);

  return (
    <nav
      className={classNames(
        'nhsuk-header__navigation',
        { 'nhsuk-header__navigation--white': !!white },
        className,
      )}
      aria-label={ariaLabel}
      {...rest}
    >
      <Container className="nhsuk-header__navigation-container">
        <ul className="nhsuk-header__navigation-list">
          {children}
          <MenuToggle />
        </ul>
      </Container>
    </nav>
  );
};

Navigation.displayName = 'Header.Navigation';
