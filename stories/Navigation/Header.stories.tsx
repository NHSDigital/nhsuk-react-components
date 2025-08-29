import React from 'react';
import { Header } from '../../src';
import { AsElementLink } from '../../src/util/types/LinkTypes';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
};
export default meta;
type Story = StoryObj<typeof Header>;

Header.Logo.displayName = 'Header.Logo';
Header.Container.displayName = 'Header.Container';
Header.Content.displayName = 'Header.Content';
Header.Search.displayName = 'Header.Search';
Header.Nav.displayName = 'Header.Nav';
Header.NavItem.displayName = 'Header.NavItem';
Header.ServiceName.displayName = 'Header.ServiceName';
Header.NavDropdownMenu.displayName = 'Header.NavDropdownMenu';

export const BasicHeader: Story = {
  render: (args) => (
    <Header>
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Content>
          <Header.Search />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
        <Header.NavItem href="/live-well">Live Well</Header.NavItem>
        <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
        <Header.NavItem href="/news">Health news</Header.NavItem>
        <Header.NavItem href="/service-search">Services near you</Header.NavItem>
        <Header.NavItem href="/" home>
          Home
        </Header.NavItem>
        <Header.NavDropdownMenu />
      </Header.Nav>
    </Header>
  ),
};

export const HeaderWithNavigation: Story = {
  render: (args) => (
    <Header>
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Content></Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
        <Header.NavItem href="/live-well">Live Well</Header.NavItem>
        <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
        <Header.NavItem href="/news">Health news</Header.NavItem>
        <Header.NavItem href="/service-search">Services near you</Header.NavItem>
        <Header.NavItem href="/" home>
          Home
        </Header.NavItem>
        <Header.NavDropdownMenu />
      </Header.Nav>
    </Header>
  ),
};

export const HeaderWithSearch: Story = {
  render: (args) => (
    <Header>
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Content>
          <Header.Search />
        </Header.Content>
      </Header.Container>
    </Header>
  ),
};

export const HeaderWithLogo: Story = {
  render: (args) => (
    <Header>
      <Header.Container>
        <Header.Logo href="/" />
      </Header.Container>
    </Header>
  ),
};

export const TransactionalHeader: Story = {
  render: (args) => (
    <Header transactional>
      <Header.Container>
        <Header.Logo href="/" />
      </Header.Container>
    </Header>
  ),
};

export const TransactionalHeaderWithServiceName: Story = {
  render: (args) => (
    <Header transactional>
      <Header.Container>
        <Header.Logo href="/" />
        <Header.ServiceName href="/">Register with a GP</Header.ServiceName>
      </Header.Container>
    </Header>
  ),
};

export const OrganisationalHeader: Story = {
  render: (args) => (
    <Header orgName="Anytown Anyplace" orgSplit="Anywhere" orgDescriptor="NHS Foundation Trust">
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Content>
          <Header.Search />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem>Your hospital visit</Header.NavItem>
        <Header.NavItem>Wards and departments</Header.NavItem>
        <Header.NavItem>Conditions and treatments</Header.NavItem>
        <Header.NavItem>Our people</Header.NavItem>
        <Header.NavItem>Our research</Header.NavItem>
        <Header.NavItem href="/" home>
          Home
        </Header.NavItem>
        <Header.NavDropdownMenu />
      </Header.Nav>
    </Header>
  ),
};

export const OrganisationalHeaderWithWhiteHeader: Story = {
  render: (args) => (
    <Header
      orgName="Anytown Anyplace"
      orgSplit="Anywhere"
      orgDescriptor="NHS Foundation Trust"
      white
    >
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Content>
          <Header.Search />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem>Your hospital visit</Header.NavItem>
        <Header.NavItem>Wards and departments</Header.NavItem>
        <Header.NavItem>Conditions and treatments</Header.NavItem>
        <Header.NavItem>Our people</Header.NavItem>
        <Header.NavItem>Our research</Header.NavItem>
        <Header.NavItem href="/" home>
          Home
        </Header.NavItem>
        <Header.NavDropdownMenu />
      </Header.Nav>
    </Header>
  ),
};

export const HeaderWithCustomNavItemComponent: Story = {
  render: (args) => {
    const customElement = (props: AsElementLink<HTMLDivElement>) => <div {...props} />;

    return (
      <Header
        orgName="Anytown Anyplace"
        orgSplit="Anywhere"
        orgDescriptor="NHS Foundation Trust"
        white
      >
        <Header.Container>
          <Header.Logo href="/" />
          <Header.Content>
            <Header.Search />
          </Header.Content>
        </Header.Container>
        <Header.Nav>
          <Header.NavItem to="/" asElement={customElement}>
            Link to props
          </Header.NavItem>
          <Header.NavItem>Your hospital visit</Header.NavItem>
          <Header.NavItem>Wards and departments</Header.NavItem>
          <Header.NavDropdownMenu />
        </Header.Nav>
      </Header>
    );
  },
};
