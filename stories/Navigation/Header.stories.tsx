import React from 'react';
import { Header } from '../../src';
import { AsElementLink } from '../../src/util/types/LinkTypes';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
};
export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderDefault: Story = {
  render: (args) => (
    <Header
      service={{
        text: 'Digital service manual',
        href: '/',
      }}
    >
      <Header.Logo />
      <Header.Search
        placeholder="Search"
        visuallyHiddenLabel="Search the NHS digital service manual"
      />
      <Header.Navigation>
        <Header.NavigationItem href="#">NHS service standard</Header.NavigationItem>
        <Header.NavigationItem href="#">Design system</Header.NavigationItem>
        <Header.NavigationItem href="#">Content guide</Header.NavigationItem>
        <Header.NavigationItem href="#">Accessibility</Header.NavigationItem>
        <Header.NavigationItem href="#">Community and contribution</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const HeaderBasic: Story = {
  render: (args) => (
    <Header>
      <Header.Logo href="/" />
    </Header>
  ),
};

export const HeaderWithServiceName: Story = {
  render: (args) => (
    <Header
      service={{
        text: 'Manage patients',
        href: '/',
      }}
    >
      <Header.Logo />
    </Header>
  ),
};

export const HeaderWithSearch: Story = {
  render: (args) => (
    <Header>
      <Header.Logo href="/" />
      <Header.Search />
    </Header>
  ),
};

export const HeaderWithNavigation: Story = {
  render: (args) => (
    <Header>
      <Header.Logo href="/" />
      <Header.Navigation>
        <Header.NavigationItem href="#">NHS service standard</Header.NavigationItem>
        <Header.NavigationItem href="#" active={true}>
          Design system
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Content guide</Header.NavigationItem>
        <Header.NavigationItem href="#">Accessibility</Header.NavigationItem>
        <Header.NavigationItem href="#">Community and contribution</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const HeaderWithAccount: Story = {
  render: (args) => (
    <Header
      service={{
        text: 'Manage patients',
        href: '/',
      }}
    >
      <Header.Logo />
      <Header.Account>
        <Header.AccountItem href="#" icon={true}>
          florence.nightingale@nhs.net
        </Header.AccountItem>
        <Header.AccountItem href="#">Log out</Header.AccountItem>
      </Header.Account>
    </Header>
  ),
};

export const HeaderWithAccountComplex: Story = {
  render: (args) => (
    <Header
      service={{
        text: 'Manage patients',
        href: '/',
      }}
    >
      <Header.Logo />
      <Header.Account>
        <Header.AccountItem href="#" icon={true}>
          Florence Nightingale (Regional Manager)
        </Header.AccountItem>
        <Header.AccountItem href="#">Change role</Header.AccountItem>
        <Header.AccountItem href="#">Log out</Header.AccountItem>
      </Header.Account>
      <Header.Navigation>
        <Header.NavigationItem href="#">Home</Header.NavigationItem>
        <Header.NavigationItem href="#">Add new patient</Header.NavigationItem>
        <Header.NavigationItem href="#">Find a patient</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const HeaderOrganisationalBlueWithNavigation: Story = {
  render: (args) => (
    <Header
      organisation={{
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust',
      }}
    >
      <Header.Logo href="/" />
      <Header.Search visuallyHiddenLabel="Search the Anytown Anyplace Anywhere website" />
      <Header.Navigation>
        <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
        <Header.NavigationItem href="#" active={true}>
          Wards and departments
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Conditions and treatments</Header.NavigationItem>
        <Header.NavigationItem href="#">Our people</Header.NavigationItem>
        <Header.NavigationItem href="#">Our research</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const HeaderOrganisationalWhiteWithNavigation: Story = {
  render: (args) => (
    <Header
      className="nhsuk-header--white"
      organisation={{
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust',
      }}
    >
      <Header.Logo href="/" />
      <Header.Search />
      <Header.Navigation>
        <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
        <Header.NavigationItem href="#" active={true}>
          Wards and departments
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Conditions and treatments</Header.NavigationItem>
        <Header.NavigationItem href="#">Our people</Header.NavigationItem>
        <Header.NavigationItem href="#">Our research</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const HeaderOrganisationalWhiteWithNavigationWhite: Story = {
  render: (args) => (
    <Header
      className="nhsuk-header--white"
      organisation={{
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust',
      }}
    >
      <Header.Logo href="/" />
      <Header.Search />
      <Header.Navigation className="nhsuk-header__navigation--white">
        <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
        <Header.NavigationItem href="#" active={true}>
          Wards and departments
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Conditions and treatments</Header.NavigationItem>
        <Header.NavigationItem href="#">Our people</Header.NavigationItem>
        <Header.NavigationItem href="#">Our research</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const HeaderWithCustomNavItemComponent: Story = {
  render: (args) => {
    const customElement = (props: AsElementLink<HTMLDivElement>) => <div {...props} />;

    return (
      <Header
        organisation={{
          name: 'Anytown Anyplace',
          split: 'Anywhere',
          descriptor: 'NHS Foundation Trust',
        }}
      >
        <Header.Logo href="/" />
        <Header.Search />
        <Header.Navigation className="nhsuk-header__navigation--white">
          <Header.NavigationItem to="/" asElement={customElement}>
            Link to props
          </Header.NavigationItem>
          <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
          <Header.NavigationItem href="#" active={true}>
            Wards and departments
          </Header.NavigationItem>
        </Header.Navigation>
      </Header>
    );
  },
};
