import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Footer } from '#components/navigation/footer/index.js';
import { BodyText } from '#components/typography/BodyText.js';

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    width: false,
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Standard: Story = {
  name: 'Footer default',
  render: (args) => (
    <Footer {...args}>
      <Footer.Meta>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
        <Footer.ListItem href="#">Contact us</Footer.ListItem>
        <Footer.ListItem href="#">Cookies</Footer.ListItem>
        <Footer.ListItem href="#">Privacy policy</Footer.ListItem>
        <Footer.ListItem href="#">Terms and conditions</Footer.ListItem>
      </Footer.Meta>
    </Footer>
  ),
};

export const WithCopyrightTextOnly: Story = {
  name: 'Footer with copyright text only',
  render: (args) => <Footer {...args}></Footer>,
};

export const WithCopyrightTextCustom: Story = {
  name: 'Footer with custom copyright text',
  render: (args) => (
    <Footer {...args}>
      <Footer.Meta>
        <Footer.Copyright>© East London NHS Foundation Trust</Footer.Copyright>
      </Footer.Meta>
    </Footer>
  ),
};

export const WithMetaAndNavigation: Story = {
  name: 'Footer with meta and navigation',
  render: (args) => (
    <Footer {...args}>
      <Footer.List>
        <Footer.ListItem href="#">Home</Footer.ListItem>
        <Footer.ListItem href="#">Health A to Z</Footer.ListItem>
        <Footer.ListItem href="#">NHS services</Footer.ListItem>
        <Footer.ListItem href="#">Live Well</Footer.ListItem>
        <Footer.ListItem href="#">Mental health</Footer.ListItem>
        <Footer.ListItem href="#">Care and support</Footer.ListItem>
        <Footer.ListItem href="#">Pregnancy</Footer.ListItem>
        <Footer.ListItem href="#">COVID-19</Footer.ListItem>
      </Footer.List>

      <Footer.List>
        <Footer.ListItem href="#">NHS App</Footer.ListItem>
        <Footer.ListItem href="#">Find my NHS number</Footer.ListItem>
        <Footer.ListItem href="#">View your GP health records</Footer.ListItem>
        <Footer.ListItem href="#">View your test results</Footer.ListItem>
        <Footer.ListItem href="#">About the NHS</Footer.ListItem>
        <Footer.ListItem href="#">Healthcare abroad</Footer.ListItem>
      </Footer.List>

      <Footer.List>
        <Footer.ListItem href="#">Other NHS websites</Footer.ListItem>
        <Footer.ListItem href="#">Profile editor login</Footer.ListItem>
      </Footer.List>

      <Footer.Meta>
        <Footer.ListItem href="#">About us</Footer.ListItem>
        <Footer.ListItem href="#">Give us feedback</Footer.ListItem>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
        <Footer.ListItem href="#">Our policies</Footer.ListItem>
        <Footer.ListItem href="#">Cookies</Footer.ListItem>

        <BodyText size="s">
          All content is available under the{' '}
          <Footer.ListItemLink href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/-4">
            Open Government Licence v3.0
          </Footer.ListItemLink>
          , except where otherwise stated.
        </BodyText>

        <Footer.Copyright>© Crown copyright</Footer.Copyright>
      </Footer.Meta>
    </Footer>
  ),
};

export const WithMetaLinksOnly: Story = {
  name: 'Footer with meta (links only)',
  render: Standard.render,
};

export const WithMetaLinksAndHTML: Story = {
  name: 'Footer with meta (links and custom HTML)',
  render: (args) => (
    <Footer {...args}>
      <Footer.Meta>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
        <Footer.ListItem href="#">Contact us</Footer.ListItem>
        <Footer.ListItem href="#">Cookies</Footer.ListItem>
        <Footer.ListItem href="#">Privacy policy</Footer.ListItem>
        <Footer.ListItem href="#">Terms and conditions</Footer.ListItem>
        <BodyText size="s">
          All content is available under the Open Government Licence v3.0, except where otherwise
          stated.
        </BodyText>
        <Footer.Copyright>© Custom copyright</Footer.Copyright>
      </Footer.Meta>
    </Footer>
  ),
};

export const WithMultipleNavigationGroups: Story = {
  name: 'Footer with multiple navigation groups',
  render: (args) => (
    <Footer {...args}>
      <Footer.List>
        <Footer.ListItem href="#">Home</Footer.ListItem>
        <Footer.ListItem href="#">Health A to Z</Footer.ListItem>
        <Footer.ListItem href="#">NHS services</Footer.ListItem>
        <Footer.ListItem href="#">Live Well</Footer.ListItem>
        <Footer.ListItem href="#">Mental health</Footer.ListItem>
        <Footer.ListItem href="#">Care and support</Footer.ListItem>
        <Footer.ListItem href="#">Pregnancy</Footer.ListItem>
        <Footer.ListItem href="#">COVID-19</Footer.ListItem>
      </Footer.List>

      <Footer.List>
        <Footer.ListItem href="#">NHS App</Footer.ListItem>
        <Footer.ListItem href="#">Find my NHS number</Footer.ListItem>
        <Footer.ListItem href="#">View your GP health records</Footer.ListItem>
        <Footer.ListItem href="#">View your test results</Footer.ListItem>
        <Footer.ListItem href="#">About the NHS</Footer.ListItem>
        <Footer.ListItem href="#">Healthcare abroad</Footer.ListItem>
      </Footer.List>

      <Footer.List>
        <Footer.ListItem href="#">Other NHS websites</Footer.ListItem>
        <Footer.ListItem href="#">Profile editor login</Footer.ListItem>
      </Footer.List>

      <Footer.List>
        <Footer.ListItem href="#">About us</Footer.ListItem>
        <Footer.ListItem href="#">Give us feedback</Footer.ListItem>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
        <Footer.ListItem href="#">Our policies</Footer.ListItem>
        <Footer.ListItem href="#">Cookies</Footer.ListItem>
      </Footer.List>
    </Footer>
  ),
};

export const WithMultipleNavigationGroupsCustomHTML: Story = {
  name: 'Footer with multiple navigation groups and custom HTML',
  render: (args) => (
    <Footer columns="3" {...args}>
      <Footer.List width="one-quarter">
        <Footer.ListItem href="#">About us</Footer.ListItem>
        <Footer.ListItem href="#">Give us feedback</Footer.ListItem>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
      </Footer.List>

      <Footer.List width="one-quarter">
        <Footer.ListItem href="#">Cookies</Footer.ListItem>
        <Footer.ListItem href="#">Privacy policy</Footer.ListItem>
        <Footer.ListItem href="#">Terms and conditions</Footer.ListItem>
      </Footer.List>

      <Footer.Content width="one-half">
        <BodyText size="s" className="nhsuk-u-margin-bottom-6">
          <strong>Manchester University NHS Foundation Trust (MFT)</strong> was formed on 1st
          October 2017 following the merger of Central Manchester University Hospitals NHS
          Foundation Trust (CMFT) and University Hospital of South Manchester NHS Foundation Trust
          (UHSM).
        </BodyText>
      </Footer.Content>

      <Footer.Content width="full">
        <BodyText size="s">
          Cobbett House, Manchester University NHS Foundation Trust, Oxford Road, Manchester, M13
          9WL
        </BodyText>
      </Footer.Content>

      <Footer.Meta>
        <Footer.Copyright>© 2025 – Manchester University NHS Foundation Trust</Footer.Copyright>
      </Footer.Meta>
    </Footer>
  ),
};

export const WithMultipleTitledNavigationGroups: Story = {
  name: 'Footer with multiple titled navigation groups',
  render: (args) => (
    <Footer {...args}>
      <Footer.List>
        <Footer.Heading>Legal</Footer.Heading>
        <Footer.ListItem href="#">Looking after your data</Footer.ListItem>
        <Footer.ListItem href="#">Freedom of information</Footer.ListItem>
        <Footer.ListItem href="#">Modern Slavery and human trafficking statement</Footer.ListItem>
      </Footer.List>

      <Footer.List>
        <Footer.Heading>Get in touch</Footer.Heading>
        <Footer.ListItem href="#">Get in touch</Footer.ListItem>
        <Footer.ListItem href="#">Contact us</Footer.ListItem>
        <Footer.ListItem href="#">Press office</Footer.ListItem>
        <Footer.ListItem href="#">Tell us what you think of our website</Footer.ListItem>
        <Footer.ListItem href="#">RSS feeds</Footer.ListItem>
      </Footer.List>

      <Footer.List>
        <Footer.Heading>Follow us</Footer.Heading>
        <Footer.ListItem href="#">LinkedIn</Footer.ListItem>
        <Footer.ListItem href="#">YouTube</Footer.ListItem>
      </Footer.List>
    </Footer>
  ),
};

export const WithSingleNavigationGroup: Story = {
  name: 'Footer with single navigation group',
  render: (args) => (
    <Footer {...args}>
      <Footer.List>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
        <Footer.ListItem href="#">Contact us</Footer.ListItem>
        <Footer.ListItem href="#">Cookies</Footer.ListItem>
        <Footer.ListItem href="#">Privacy policy</Footer.ListItem>
        <Footer.ListItem href="#">Terms and conditions</Footer.ListItem>
      </Footer.List>
    </Footer>
  ),
};
