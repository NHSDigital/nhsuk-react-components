import React from 'react';
import { Footer } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
};
export default meta;
type Story = StoryObj<typeof Footer>;

Footer.List.displayName = 'Footer.List';
Footer.ListItem.displayName = 'Footer.ListItem';
Footer.Copyright.displayName = 'Footer.Copyright';

export const Standard: Story = {
  render: (args) => (
    <>
      <div id="restOfThePage" style={{ height: '60vh' }} />
      <Footer>
        <Footer.List>
          <Footer.ListItem href="https://www.nhs.uk/nhs-sites/">NHS sites</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/">About us</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/contact-us/">Contact us</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/sitemap/">Sitemap</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/our-policies/">Our policies</Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
      </Footer>
    </>
  ),
};

export const WithLinksArrangedInColumns: Story = {
  render: (args) => (
    <>
      <div id="restOfThePage" style={{ height: '60vh' }} />
      <Footer>
        <Footer.List>
          <Footer.ListItem href="#">Home</Footer.ListItem>
          <Footer.ListItem href="#">Health A to Z</Footer.ListItem>
          <Footer.ListItem href="#">Live Well</Footer.ListItem>
          <Footer.ListItem href="#">Mental health</Footer.ListItem>
          <Footer.ListItem href="#">Care and support</Footer.ListItem>
          <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
          <Footer.ListItem href="#">Pregnancy</Footer.ListItem>
          <Footer.ListItem href="#">NHS services</Footer.ListItem>
          <Footer.ListItem href="#">Coronavirus (COVID-19)</Footer.ListItem>
        </Footer.List>
        <Footer.List>
          <Footer.ListItem href="#">NHS App</Footer.ListItem>
          <Footer.ListItem href="#">Find my NHS number</Footer.ListItem>
          <Footer.ListItem href="#">Your health records</Footer.ListItem>
          <Footer.ListItem href="#">About the NHS</Footer.ListItem>
          <Footer.ListItem href="#">Healthcare abroad</Footer.ListItem>
        </Footer.List>

        <Footer.List>
          <Footer.ListItem href="#">Contact us</Footer.ListItem>
          <Footer.ListItem href="#">Other NHS websites</Footer.ListItem>
          <Footer.ListItem href="#">Profile editor login</Footer.ListItem>
        </Footer.List>

        <Footer.List>
          <Footer.ListItem href="#">About us</Footer.ListItem>
          <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
          <Footer.ListItem href="#">Our policies</Footer.ListItem>
          <Footer.ListItem href="#">Cookies</Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
      </Footer>
    </>
  ),
};
