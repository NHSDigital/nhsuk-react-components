/* eslint-disable @typescript-eslint/no-redeclare */
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import Section, { SectionProps } from './components/Section';
import Link from './components/Link';
import './_AccordionMenu.scss';

interface AccordionMenu extends React.FC<HTMLProps<HTMLDivElement>> {
  Section: React.FC<SectionProps>;
  Link: React.FC<HTMLProps<HTMLAnchorElement>>;
}

const AccordionMenu: AccordionMenu = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-accordion-menu', className)} {...rest} />
);

AccordionMenu.Section = Section;
AccordionMenu.Link = Link;

export default AccordionMenu;
