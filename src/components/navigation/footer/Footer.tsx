/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';
import { Container } from '@components/layout';
import { childIsOfComponentType } from '@util/types/TypeGuards';

type FooterListProps = React.HTMLProps<HTMLOListElement> & { singleColumn?: boolean };

const FooterList: React.FC<FooterListProps> = ({
  className,
  children,
  singleColumn = false,
  ...rest
}) => {
  let newChildren = children;

  if (singleColumn) {
    newChildren = Children.map(newChildren, (child) =>
      childIsOfComponentType(child, FooterListItem) ? cloneElement(child, { singleColumn }) : child,
    );
  }

  return (
    <ul className={classNames('nhsuk-footer__list', className)} {...rest}>
      {newChildren}
    </ul>
  );
};

const FooterListItem: React.FC<React.HTMLProps<HTMLAnchorElement> & { singleColumn?: boolean }> = ({
  className,
  singleColumn = false,
  ...rest
}) => (
  <li
    className={classNames(
      'nhsuk-footer__list-item',
      singleColumn ? 'nhsuk-footer-default__list-item' : '',
    )}
  >
    <a className={classNames('nhsuk-footer__list-item-link', className)} {...rest} />
  </li>
);

const FooterCopyright: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-footer__copyright', className)} {...rest} />
);

interface FooterProps extends React.HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface Footer extends React.FC<FooterProps> {
  List: React.FC<FooterListProps>;
  ListItem: React.FC<React.HTMLProps<HTMLAnchorElement>>;
  Copyright: React.FC<React.HTMLProps<HTMLParagraphElement>>;
}

const Footer: Footer = ({ className, children, visuallyHiddenText = 'Support links', ...rest }) => {
  const footerCols = Children.toArray(children).filter((child) =>
    childIsOfComponentType(child, FooterList),
  );
  const footerCopyright = Children.toArray(children).filter((child) =>
    childIsOfComponentType(child, FooterCopyright),
  );

  let newChildren;
  const footerHasMultipleColumns = footerCols.length > 1;

  if (footerHasMultipleColumns) {
    // Remove the copyright from being rendered inside the 'nhsuk-footer' div
    newChildren = Children.toArray(children).filter(
      (child) => !childIsOfComponentType(child, FooterCopyright),
    );
  } else {
    newChildren = Children.map(children, (child) =>
      childIsOfComponentType(child, FooterList)
        ? cloneElement(child, { singleColumn: true })
        : child,
    );
  }

  return (
    <footer role="contentinfo" {...rest}>
      <div className={classNames('nhsuk-footer-container', className)}>
        <Container>
          {visuallyHiddenText ? (
            <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
          ) : null}
          <div className="nhsuk-footer">{newChildren}</div>
          {footerHasMultipleColumns ? <div>{footerCopyright}</div> : undefined}
        </Container>
      </div>
    </footer>
  );
};

Footer.List = FooterList;
Footer.ListItem = FooterListItem;
Footer.Copyright = FooterCopyright;

export default Footer;
