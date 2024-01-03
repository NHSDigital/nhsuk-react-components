import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Container } from '../layout';
import type { AsElementLink } from '../../util/types/LinkTypes';

type FooterListProps = HTMLProps<HTMLOListElement>;

const FooterList: React.FC<FooterListProps> = ({ className, ...rest }) => (
  <ul className={classNames('nhsuk-footer__list', className)} {...rest} />
);

const FooterListItem: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <li className="nhsuk-footer__list-item">
    <Component className={classNames('nhsuk-footer__list-item-link', className)} {...rest}>
      {children}
    </Component>
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

const Footer: Footer = ({ className, children, visuallyHiddenText, ...rest }) => (
  <footer {...rest}>
    <div className={classNames('nhsuk-footer', className)}>
      <Container>
        {visuallyHiddenText ? (
          <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
        ) : null}
        {children}
      </Container>
    </div>
  </footer>
);

Footer.defaultProps = {
  visuallyHiddenText: 'Support links',
};

Footer.List = FooterList;
Footer.ListItem = FooterListItem;
Footer.Copyright = FooterCopyright;

export default Footer;
