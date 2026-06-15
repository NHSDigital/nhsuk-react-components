import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type ComponentProps } from 'react';

import { Header } from '#components/navigation/header/index.js';

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the header component and when to use it, visit the [design system in
          the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/header) for guidance,
          examples and options.
        </Markdown>
      ),
    },
    layout: 'fullscreen',
    width: false,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: 'Header default',
  args: {
    service: {
      text: 'Digital service manual',
      href: '/',
    },
  },
  render: (args) => (
    <Header {...args}>
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

export const Basic: Story = {
  name: 'Header basic',
  args: {
    logo: {
      href: '/',
    },
  },
  render: (args) => <Header {...args} />,
};

export const WithServiceName: Story = {
  name: 'Header with service name',
  args: {
    service: {
      text: 'Manage patients',
      href: '/',
    },
  },
  render: (args) => <Header {...args} />,
};

export const WithSearch: Story = {
  name: 'Header with search',
  args: {
    logo: {
      href: '/',
    },
  },
  render: (args) => (
    <Header {...args}>
      <Header.Search />
    </Header>
  ),
};

export const WithNavigation: Story = {
  name: 'Header with navigation',
  args: {
    logo: {
      href: '/',
    },
  },
  render: (args) => (
    <Header {...args}>
      <Header.Navigation>
        <Header.NavigationItem href="#">NHS service standard</Header.NavigationItem>
        <Header.NavigationItem href="#" active>
          Design system
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Content guide</Header.NavigationItem>
        <Header.NavigationItem href="#">Accessibility</Header.NavigationItem>
        <Header.NavigationItem href="#">Community and contribution</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const WithAccount: Story = {
  name: 'Header with account',
  args: {
    service: {
      text: 'Manage patients',
      href: '/',
    },
  },
  render: (args) => (
    <Header {...args}>
      <Header.Account>
        <Header.AccountItem href="#" icon>
          florence.nightingale@nhs.net
        </Header.AccountItem>
        <Header.AccountItem formProps={{ action: '/log-out', method: 'post' }}>
          Log out
        </Header.AccountItem>
      </Header.Account>
    </Header>
  ),
};

export const WithAccountComplex: Story = {
  name: 'Header with account (complex)',
  args: {
    service: {
      text: 'Manage patients',
      href: '/',
    },
  },
  render: (args) => (
    <Header {...args}>
      <Header.Account>
        <Header.AccountItem href="#" icon>
          Florence Nightingale (Regional Manager)
        </Header.AccountItem>
        <Header.AccountItem href="#">Change role</Header.AccountItem>
        <Header.AccountItem formProps={{ action: '/log-out', method: 'post' }}>
          Log out
        </Header.AccountItem>
      </Header.Account>
      <Header.Navigation>
        <Header.NavigationItem href="#">Home</Header.NavigationItem>
        <Header.NavigationItem href="#">Add new patient</Header.NavigationItem>
        <Header.NavigationItem href="#">Find a patient</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const BlueWithNavigation: Story = {
  name: 'Header blue with navigation',
  args: {
    logo: { href: '/' },
    organisation: {
      name: 'Anytown Anyplace',
      split: 'Anywhere',
      descriptor: 'NHS Foundation Trust',
    },
  },
  render: (args) => (
    <Header {...args}>
      <Header.Search visuallyHiddenLabel="Search the Anytown Anyplace Anywhere website" />
      <Header.Navigation>
        <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
        <Header.NavigationItem href="#" active>
          Wards and departments
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Conditions and treatments</Header.NavigationItem>
        <Header.NavigationItem href="#">Our people</Header.NavigationItem>
        <Header.NavigationItem href="#">Our research</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const WhiteWithNavigation: Story = {
  name: 'Header white with navigation',
  args: {
    logo: { href: '/' },
    organisation: {
      name: 'Anytown Anyplace',
      split: 'Anywhere',
      descriptor: 'NHS Foundation Trust',
    },
    white: true,
  },
  render: (args) => (
    <Header {...args}>
      <Header.Search />
      <Header.Navigation>
        <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
        <Header.NavigationItem href="#" active>
          Wards and departments
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Conditions and treatments</Header.NavigationItem>
        <Header.NavigationItem href="#">Our people</Header.NavigationItem>
        <Header.NavigationItem href="#">Our research</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const WhiteWithNavigationWhite: Story = {
  name: 'Header white with navigation (white)',
  args: {
    logo: { href: '/' },
    organisation: {
      name: 'Anytown Anyplace',
      split: 'Anywhere',
      descriptor: 'NHS Foundation Trust',
    },
    white: true,
  },
  render: (args) => (
    <Header {...args}>
      <Header.Search />
      <Header.Navigation white>
        <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
        <Header.NavigationItem href="#" active>
          Wards and departments
        </Header.NavigationItem>
        <Header.NavigationItem href="#">Conditions and treatments</Header.NavigationItem>
        <Header.NavigationItem href="#">Our people</Header.NavigationItem>
        <Header.NavigationItem href="#">Our research</Header.NavigationItem>
      </Header.Navigation>
    </Header>
  ),
};

export const WithCustomNavigationItemComponent: Story = {
  name: 'Header with custom navigation item component',
  args: {
    logo: { href: '/' },
    organisation: {
      name: 'Anytown Anyplace',
      split: 'Anywhere',
      descriptor: 'NHS Foundation Trust',
    },
  },
  render: (args) => {
    function CustomLink({ children, href, ...rest }: ComponentProps<'a'>) {
      return (
        <a href={href} {...rest} data-custom-link="true">
          {children}
        </a>
      );
    }

    return (
      <Header {...args}>
        <Header.Search />
        <Header.Navigation white>
          <Header.NavigationItem to="/" asElement={CustomLink}>
            Link to props
          </Header.NavigationItem>
          <Header.NavigationItem href="#">Your hospital visit</Header.NavigationItem>
          <Header.NavigationItem href="#" active>
            Wards and departments
          </Header.NavigationItem>
        </Header.Navigation>
      </Header>
    );
  },
};
