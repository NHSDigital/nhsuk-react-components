/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HeaderWithLogo from '@components/header-with-logo/HeaderWithLogo';

const meta: Meta<typeof HeaderWithLogo> = {
  title: 'Extensions/Header with logo next to nav links',
  component: HeaderWithLogo,
};
export default meta;

type Story = StoryObj<typeof HeaderWithLogo>;

export const Standard: Story = {
  render: () => (
    <>
      <HeaderWithLogo>
        <HeaderWithLogo.Logo href="/" />
        <HeaderWithLogo.ServiceName>Your information page</HeaderWithLogo.ServiceName>
        <HeaderWithLogo.Nav>
          <HeaderWithLogo.NavItem href="/conditions">Health A-Z</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/live-well">Live Well</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/social-care-and-support">Care and support</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/news">Health news</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/service-search">Services near you</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/" home>Home</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavDropdownMenu />
        </HeaderWithLogo.Nav>
        <HeaderWithLogo.Search />
      </HeaderWithLogo>
    </>
  ),
};
