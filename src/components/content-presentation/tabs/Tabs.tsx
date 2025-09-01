'use client';
import classNames from 'classnames';
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';
import { Tabs } from 'nhsuk-frontend';

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

interface TabsComponent extends FC<TabsProps> {
  Title: FC<TabTitleProps>;
  List: FC<TabListProps>;
  ListItem: FC<TabListItemProps>;
  Contents: FC<TabContentsProps>;
}

const TabsComponent: TabsComponent = ({ className, children, ...rest }) => {
  const moduleRef = useRef<HTMLDivElement>(null);
  const [instance, setInstance] = useState<Tabs>();

  useEffect(() => {
    if (!moduleRef.current || instance) {
      return;
    }

    setInstance(new Tabs(moduleRef.current));
  }, [moduleRef, instance]);

  return (
    <div
      className={classNames('nhsuk-tabs', className)}
      data-module="nhsuk-tabs"
      ref={moduleRef}
      {...rest}
    >
      {children}
    </div>
  );
};

TabsComponent.displayName = 'Tabs';
TabTitle.displayName = 'Tabs.Title';
TabList.displayName = 'Tabs.List';
TabListItem.displayName = 'Tabs.ListItem';
TabContents.displayName = 'Tabs.Contents';

TabsComponent.Title = TabTitle;
TabsComponent.List = TabList;
TabsComponent.ListItem = TabListItem;
TabsComponent.Contents = TabContents;

export default TabsComponent;
