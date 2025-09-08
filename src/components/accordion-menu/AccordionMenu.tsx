/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import classNames from 'classnames';
import Section, { SectionProps } from './components/Section';
import Link from './components/Link';
import './_AccordionMenu.scss';

interface AccordionMenu extends React.FC<React.HTMLProps<HTMLDivElement>> {
  Section: React.FC<SectionProps>;
  Link: React.FC<React.HTMLProps<HTMLAnchorElement>>;
}

const AccordionMenu: AccordionMenu = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-accordion-menu', className)} {...rest} />
);

AccordionMenu.Section = Section;
AccordionMenu.Link = Link;

export default AccordionMenu;
