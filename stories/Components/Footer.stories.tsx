import React from 'react';
import { Footer } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Standard: Story = {
  render: () => (
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

export const WithThreeColumns: Story = {
  render: () => (
    <>
      <div id="restOfThePage" style={{ height: '60vh' }} />
      <Footer>
        <Footer.List columns>
          <Footer.ListItem href="https://www.nhs.uk/nhs-sites/">NHS sites</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/">About us</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/contact-us/">Contact us</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/personalisation/login.aspx">
            Profile editor login
          </Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/sitemap/">Sitemap</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/accessibility/">Accessibility</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/our-policies/">Our policies</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/our-policies/cookies-policy/">
            Cookies
          </Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
      </Footer>
    </>
  ),
};
