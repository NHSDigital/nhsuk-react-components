import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef } from 'react';

import {
  FooterContent,
  FooterCopyright,
  FooterHeading,
  FooterList,
  FooterListItem,
  FooterListItemLink,
  FooterMeta,
  type FooterContentProps,
} from './components/index.js';

import { Container } from '#components/layout/index.js';
import { childIsOfComponentType } from '#util/types/index.js';

export interface FooterProps extends ComponentPropsWithoutRef<'div'> {
  columns?: '1' | '2' | '3' | '4';
  containerClassName?: string;
}

const FooterComponent = forwardRef<HTMLElement, FooterProps>(
  ({ className, containerClassName, children, columns, ...rest }, forwardedRef) => {
    const items = Children.toArray(children);

    // Allow meta content
    const meta = items.filter((child) => childIsOfComponentType(child, FooterMeta));

    // Allow lists and content blocks for column arrangement
    const listsOrContent = items.filter(
      (child) =>
        childIsOfComponentType(child, FooterList) || // Footer lists
        childIsOfComponentType(child, FooterContent), // Content blocks
    );

    let width: FooterContentProps['width'];

    switch (columns) {
      case '1':
        width = 'full';
        break;

      case '2':
        width = 'one-half';
        break;

      case '3':
        width = 'one-third';
        break;

      default:
        width = 'one-quarter';
    }

    const columnsPerRow = columns ? Number.parseInt(columns) : 4;
    const columnsTotal = Math.ceil(listsOrContent.length / columnsPerRow);

    const rows = Array.from({ length: columnsTotal }, (column, index) =>
      listsOrContent.slice(index * columnsPerRow, index * columnsPerRow + columnsPerRow),
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
              {row.map((column, columnIndex) => {
                const { children, ...rest } = column.props;
                return (
                  <FooterContent width={width} {...rest} key={`column-${columnIndex}`}>
                    {childIsOfComponentType(column, FooterContent) ? children : column}
                  </FooterContent>
                );
              })}
            </div>
          ))}
          {meta.length ? meta : <FooterMeta />}
        </Container>
      </footer>
    );
  },
);

FooterComponent.displayName = 'Footer';

export const Footer = Object.assign(FooterComponent, {
  Content: FooterContent,
  Copyright: FooterCopyright,
  Heading: FooterHeading,
  List: FooterList,
  ListItem: FooterListItem,
  ListItemLink: FooterListItemLink,
  Meta: FooterMeta,
});
