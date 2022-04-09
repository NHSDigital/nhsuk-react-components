import { Story } from '@storybook/react';
import React from 'react';
import { Header } from '../../src';
import { AsElementLink } from '../../src/util/types/LinkTypes';

export const BasicHeader: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
      <Header.NavItem href="/live-well">Live Well</Header.NavItem>
      <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
      <Header.NavItem href="/news">Health news</Header.NavItem>
      <Header.NavItem href="/service-search">Services near you</Header.NavItem>
    </Header.Nav>
  </Header>
);

export const HeaderWithNavigation: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
      <Header.NavItem href="/live-well">Live Well</Header.NavItem>
      <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
      <Header.NavItem href="/news">Health news</Header.NavItem>
      <Header.NavItem href="/service-search">Services near you</Header.NavItem>
    </Header.Nav>
  </Header>
);

export const HeaderWithSearch: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.Search />
      </Header.Content>
    </Header.Container>
  </Header>
);

export const HeaderWithLogo: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
    </Header.Container>
  </Header>
);

export const TransactionalHeader: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
    </Header.Container>
  </Header>
);
TransactionalHeader.args = { transactional: true };

export const TransactionalHeaderWithServiceName: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.ServiceName href="/">Register with a GP</Header.ServiceName>
    </Header.Container>
  </Header>
);
TransactionalHeaderWithServiceName.args = { transactional: true };

export const TransactionalHeaderWithALongServiceName: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.ServiceName href="/" long>
        Find out why your NHS data matters
      </Header.ServiceName>
    </Header.Container>
  </Header>
);
TransactionalHeaderWithALongServiceName.args = { transactional: true };

export const OrganisationalHeader: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem>Your hospital visit</Header.NavItem>
      <Header.NavItem>Wards and departments</Header.NavItem>
      <Header.NavItem>Conditions and treatments</Header.NavItem>
      <Header.NavItem>Our people</Header.NavItem>
      <Header.NavItem>Our research</Header.NavItem>
    </Header.Nav>
  </Header>
);
OrganisationalHeader.args = {
  orgName: 'Anytown Anyplace',
  orgSplit: 'Anywhere',
  orgDescriptor: 'NHS Foundation Trust',
};

export const OrganisationalHeaderWithWhiteHeader: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem>Your hospital visit</Header.NavItem>
      <Header.NavItem>Wards and departments</Header.NavItem>
      <Header.NavItem>Conditions and treatments</Header.NavItem>
      <Header.NavItem>Our people</Header.NavItem>
      <Header.NavItem>Our research</Header.NavItem>
    </Header.Nav>
  </Header>
);
OrganisationalHeaderWithWhiteHeader.args = {
  orgName: 'Anytown Anyplace',
  orgSplit: 'Anywhere',
  orgDescriptor: 'NHS Foundation Trust',
  white: true,
};

export const HeaderWithCustomNavItemComponent: Story = (args) => {
  const customElement = (props: AsElementLink<HTMLDivElement>) => <div {...props} />;

  return (
    <Header {...args}>
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Content>
          <Header.MenuToggle />
          <Header.Search />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem to="/" asElement={customElement}>
          Link to props
        </Header.NavItem>
        <Header.NavItem>Your hospital visit</Header.NavItem>
        <Header.NavItem>Wards and departments</Header.NavItem>
      </Header.Nav>
    </Header>
  );
};
HeaderWithCustomNavItemComponent.args = {
  orgName: 'Anytown Anyplace',
  orgSplit: 'Anywhere',
  orgDescriptor: 'NHS Foundation Trust',
  white: true,
};

export const HeaderWithCustomNavMenuCloseAndNavItemListComponent: Story = (args) => (
  <Header {...args}>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.NavContainer>
      <Header.NavTitle>
        <span>Menu</span>
        <Header.NavMenuClose />
      </Header.NavTitle>
      <Header.NavItemList>
        <Header.NavItem href="/" mobileOnly>
          Home
        </Header.NavItem>
        <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
        <Header.NavItem href="/live-well">Live Well</Header.NavItem>
        <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
        <Header.NavItem href="/news">Health news</Header.NavItem>
        <Header.NavItem href="/service-search">Services near you</Header.NavItem>
      </Header.NavItemList>
    </Header.NavContainer>
  </Header>
);
HeaderWithCustomNavMenuCloseAndNavItemListComponent.args = {
  orgName: 'Anytown Anyplace',
  orgSplit: 'Anywhere',
  orgDescriptor: 'NHS Foundation Trust',
  white: true,
};

export default {
  title: 'Components/Header',
  component: Header,
  subcomponents: {
    'Header.Logo': Header.Logo,
    'Header.Search': Header.Search,
    'Header.Nav': Header.Nav,
    'Header.NavTitle': Header.NavTitle,
    'Header.NavContainer': Header.NavContainer,
    'Header.NavItemList': Header.NavItemList,
    'Header.NavItem': Header.NavItem,
    'Header.NavMenuClose': Header.NavMenuClose,
    'Header.Container': Header.Container,
    'Header.Content': Header.Container,
    'Header.MenuToggle': Header.MenuToggle,
    'Header.ServiceName': Header.ServiceName,
  },
};
