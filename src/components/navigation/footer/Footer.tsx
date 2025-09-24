import React, { Children, ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { Container } from '@components/layout';
import { childIsOfComponentType } from '@util/types/TypeGuards';

interface FooterMetaProps extends FooterListProps {
  visuallyHiddenText?: string;
}

const FooterMeta: FC<FooterMetaProps> = ({
  children,
  visuallyHiddenText = 'Support links',
  ...rest
}) => {
  const items = Children.toArray(children);

  const metaItems = items.filter((child) => childIsOfComponentType(child, FooterListItem));
  const metaCopyright = items.filter((child) => childIsOfComponentType(child, FooterCopyright));

  return (
    <div className="nhsuk-footer__meta">
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
      <FooterList {...rest}>{metaItems}</FooterList>
      {metaCopyright.length ? metaCopyright : <FooterCopyright />}
    </div>
  );
};

type FooterListProps = ComponentPropsWithoutRef<'ul'>;

const FooterList: FC<FooterListProps> = ({ className, children, ...rest }) => (
  <ul className={classNames('nhsuk-footer__list', className)} {...rest}>
    {children}
  </ul>
);

const FooterListItem: FC<ComponentPropsWithoutRef<'a'>> = ({ className, ...rest }) => (
  <li className="nhsuk-footer__list-item">
    <a className={classNames('nhsuk-footer__list-item-link', className)} {...rest} />
  </li>
);

const FooterCopyright: FC<ComponentPropsWithoutRef<'p'>> = ({
  children = '© NHS England',
  className,
  ...rest
}) => (
  <p className={classNames('nhsuk-body-s', className)} {...rest}>
    {children}
  </p>
);

interface FooterProps extends ComponentPropsWithoutRef<'div'> {
  containerClassName?: string;
}

const FooterComponent: FC<FooterProps> = ({ className, containerClassName, children, ...rest }) => {
  const items = Children.toArray(children);
  const meta = items.filter((child) => childIsOfComponentType(child, FooterMeta));
  const columns = items.filter((child) => childIsOfComponentType(child, FooterList));

  const columnsPerRow = 4;
  const columnsTotal = Math.ceil(columns.length / columnsPerRow);

  const rows = Array.from({ length: columnsTotal }, (column, index) =>
    columns.slice(index * columnsPerRow, index * columnsPerRow + columnsPerRow),
  );

  return (
    <footer className={classNames('nhsuk-footer', className)} role="contentinfo" {...rest}>
      <Container className={containerClassName}>
        {rows.map((row, rowIndex) => (
          <div className="nhsuk-footer__navigation nhsuk-grid-row" key={`row-${rowIndex}`}>
            {row.map((column, columnIndex) => (
              <div className="nhsuk-grid-column-one-quarter" key={`column-${columnIndex}`}>
                {column}
              </div>
            ))}
          </div>
        ))}
        {meta}
      </Container>
    </footer>
  );
};

FooterComponent.displayName = 'Footer';
FooterMeta.displayName = 'Footer.Meta';
FooterList.displayName = 'Footer.List';
FooterListItem.displayName = 'Footer.ListItem';
FooterCopyright.displayName = 'Footer.Copyright';

export default Object.assign(FooterComponent, {
  Meta: FooterMeta,
  List: FooterList,
  ListItem: FooterListItem,
  Copyright: FooterCopyright,
});
