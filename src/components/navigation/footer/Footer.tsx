import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Container } from '#components/layout/index.js';
import { childIsOfComponentType } from '#util/types/index.js';
import { FooterCopyright, FooterList, FooterListItem, FooterMeta } from './components/index.js';

export interface FooterProps extends ComponentPropsWithoutRef<'div'> {
  containerClassName?: string;
}

const FooterComponent = forwardRef<HTMLElement, FooterProps>(
  ({ className, containerClassName, children, ...rest }, forwardedRef) => {
    const items = Children.toArray(children);
    const meta = items.filter((child) => childIsOfComponentType(child, FooterMeta));
    const columns = items.filter((child) => childIsOfComponentType(child, FooterList));

    const columnsPerRow = 4;
    const columnsTotal = Math.ceil(columns.length / columnsPerRow);

    const rows = Array.from({ length: columnsTotal }, (column, index) =>
      columns.slice(index * columnsPerRow, index * columnsPerRow + columnsPerRow),
    );

    return (
      <footer
        className={classNames('nhsuk-footer', className)}
        role="contentinfo"
        ref={forwardedRef}
        {...rest}
      >
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
  },
);

FooterComponent.displayName = 'Footer';

export const Footer = Object.assign(FooterComponent, {
  Meta: FooterMeta,
  List: FooterList,
  ListItem: FooterListItem,
  Copyright: FooterCopyright,
});
