/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Container } from '../../layout';
import { childIsOfComponentType } from '../../../util/types/TypeGuards';

type FooterListProps = HTMLProps<HTMLOListElement> & { singleColumn?: boolean };

const FooterList: React.FC<FooterListProps> = ({
  className,
  children,
  singleColumn = false,
  ...rest
}) => {
  let newChildren = children;

  if (singleColumn) {
    newChildren = React.Children.map(newChildren, (child) =>
      childIsOfComponentType(child, FooterListItem)
        ? React.cloneElement(child, { singleColumn })
        : child,
    );
  }

  return (
    <ul className={classNames('nhsuk-footer__list', className)} {...rest}>
      {newChildren}
    </ul>
  );
};

const FooterListItem: React.FC<HTMLProps<HTMLAnchorElement> & { singleColumn?: boolean }> = ({
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

const FooterCopyright: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-footer__copyright', className)} {...rest} />
);

interface FooterProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface Footer extends React.FC<FooterProps> {
  List: React.FC<FooterListProps>;
  ListItem: React.FC<HTMLProps<HTMLAnchorElement>>;
  Copyright: React.FC<HTMLProps<HTMLParagraphElement>>;
}

const Footer: Footer = ({ className, children, visuallyHiddenText = 'Support links', ...rest }) => {
  const footerCols = React.Children.toArray(children).filter((child) =>
    childIsOfComponentType(child, FooterList),
  );

  let newChildren = children;

  if (footerCols.length === 1) {
    newChildren = React.Children.map(children, (child) =>
      childIsOfComponentType(child, FooterList)
        ? React.cloneElement(child, { singleColumn: true })
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
        </Container>
      </div>
    </footer>
  );
};

Footer.List = FooterList;
Footer.ListItem = FooterListItem;
Footer.Copyright = FooterCopyright;

export default Footer;
