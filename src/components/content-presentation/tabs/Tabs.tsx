'use client';

import classNames from 'classnames';
import { type Tabs as TabsModule } from 'nhsuk-frontend';
import {
  createRef,
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type FC,
} from 'react';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

export type TabsProps = ComponentPropsWithoutRef<'div'>;

export type TabsTitleProps = HeadingLevelProps;

export type TabsListProps = ComponentPropsWithoutRef<'ul'>;

export interface TabsListItemProps extends ComponentPropsWithoutRef<'a'> {
  id: string;
}

export interface TabsContentsProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
}

export const TabsTitle: FC<TabsTitleProps> = ({ children, headingLevel = 'h2', ...rest }) => (
  <HeadingLevel className="nhsuk-tabs__title" headingLevel={headingLevel} {...rest}>
    {children}
  </HeadingLevel>
);

export const TabsList: FC<TabsListProps> = ({ children, ...rest }) => (
  <ul className="nhsuk-tabs__list" {...rest}>
    {children}
  </ul>
);

export const TabsListItem: FC<TabsListItemProps> = ({ children, id, ...rest }) => (
  <li className="nhsuk-tabs__list-item">
    <a className="nhsuk-tabs__tab" href={`#${id}`} {...rest}>
      {children}
    </a>
  </li>
);

export const TabsContents: FC<TabsContentsProps> = ({ children, id, ...rest }) => (
  <div className="nhsuk-tabs__panel" id={id} {...rest}>
    {children}
  </div>
);

const TabsComponent = forwardRef<HTMLDivElement, TabsProps>((props, forwardedRef) => {
  const { children, className, ...rest } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
  const [instanceError, setInstanceError] = useState<Error>();
  const [instance, setInstance] = useState<TabsModule>();

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      return;
    }

    import('nhsuk-frontend')
      .then(({ Tabs }) => setInstance(new Tabs(moduleRef.current)))
      .catch(setInstanceError);
  }, [moduleRef, instance]);

  if (instanceError) {
    throw instanceError;
  }

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
});

TabsComponent.displayName = 'Tabs';
TabsTitle.displayName = 'Tabs.Title';
TabsList.displayName = 'Tabs.List';
TabsListItem.displayName = 'Tabs.ListItem';
TabsContents.displayName = 'Tabs.Contents';

export const Tabs = Object.assign(TabsComponent, {
  Title: TabsTitle,
  List: TabsList,
  ListItem: TabsListItem,
  Contents: TabsContents,
});
