import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Footer } from '#components/navigation/footer/index.js';

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Standard: Story = {
  render: (args) => (
    <Footer {...args}>
      <Footer.Meta>
        <Footer.ListItem href="#">About us</Footer.ListItem>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
        <Footer.ListItem href="#">Our policies</Footer.ListItem>
        <Footer.ListItem href="#">Cookies</Footer.ListItem>

        <Footer.Copyright />
      </Footer.Meta>
    </Footer>
  ),
};

export const WithLinksArrangedInColumns: Story = {
  render: (args) => (
    <Footer {...args}>
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
        <Footer.ListItem href="#">Give us feedback</Footer.ListItem>
        <Footer.ListItem href="#">Other NHS websites</Footer.ListItem>
        <Footer.ListItem href="#">Profile editor login</Footer.ListItem>
      </Footer.List>

      <Footer.Meta>
        <Footer.ListItem href="#">About us</Footer.ListItem>
        <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
        <Footer.ListItem href="#">Our policies</Footer.ListItem>
        <Footer.ListItem href="#">Cookies</Footer.ListItem>

        <Footer.Copyright />
      </Footer.Meta>
    </Footer>
  ),
};
