'use client';
import classNames from 'classnames';
import React, { FC, HTMLAttributes, useEffect } from 'react';
import HeadingLevel, { HeadingLevelType } from '@util/HeadingLevel';
import TabsJs from 'nhsuk-frontend/packages/components/tabs/tabs.js';

type TabsProps = HTMLAttributes<HTMLDivElement>;

type TabTitleProps = { children: React.ReactNode; headingLevel?: HeadingLevelType };

type TabListProps = {
  children: React.ReactNode;
};

type TabListItemProps = {
  id: string;
  children: React.ReactNode;
};

type TabContentsProps = {
  id: string;
  children: React.ReactNode;
};

const TabTitle: FC<TabTitleProps> = ({ children, headingLevel = 'h2' }) => (
  <HeadingLevel className="nhsuk-tabs__title" headingLevel={headingLevel}>
    {children}
  </HeadingLevel>
);

const TabList: FC<TabListProps> = ({ children }) => (
  <ul className="nhsuk-tabs__list">{children}</ul>
);

const TabListItem: FC<TabListItemProps> = ({ id, children }) => (
  <li className="nhsuk-tabs__list-item">
    <a className="nhsuk-tabs__tab" href={`#${id}`}>
      {children}
    </a>
  </li>
);

const TabContents: FC<TabContentsProps> = ({ id, children }) => (
  <div className="nhsuk-tabs__panel" id={id}>
    {children}
  </div>
);

interface Tabs extends FC<TabsProps> {
  Title: FC<TabTitleProps>;
  List: FC<TabListProps>;
  ListItem: FC<TabListItemProps>;
  Contents: FC<TabContentsProps>;
}

const Tabs: Tabs = ({ className, children, ...rest }) => {
  useEffect(() => {
    TabsJs();
  }, []);

  return (
    <div className={classNames('nhsuk-tabs', className)} data-module="nhsuk-tabs" {...rest}>
      {children}
    </div>
  );
};

Tabs.Title = TabTitle;
Tabs.List = TabList;
Tabs.ListItem = TabListItem;
Tabs.Contents = TabContents;

export default Tabs;
