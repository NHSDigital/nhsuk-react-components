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
import { HeadingLevel, type HeadingLevelProps } from '#components/utils';

export type TabsProps = ComponentPropsWithoutRef<'div'>;

export type TabTitleProps = HeadingLevelProps;

export type TabListProps = ComponentPropsWithoutRef<'ul'>;

export interface TabListItemProps extends ComponentPropsWithoutRef<'a'> {
  id: string;
}

export interface TabContentsProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
}

const TabTitle: FC<TabTitleProps> = ({ children, headingLevel = 'h2', ...rest }) => (
  <HeadingLevel className="nhsuk-tabs__title" headingLevel={headingLevel} {...rest}>
    {children}
  </HeadingLevel>
);

const TabList: FC<TabListProps> = ({ children, ...rest }) => (
  <ul className="nhsuk-tabs__list" {...rest}>
    {children}
  </ul>
);

const TabListItem: FC<TabListItemProps> = ({ children, id, ...rest }) => (
  <li className="nhsuk-tabs__list-item">
    <a className="nhsuk-tabs__tab" href={`#${id}`} {...rest}>
      {children}
    </a>
  </li>
);

const TabContents: FC<TabContentsProps> = ({ children, id, ...rest }) => (
  <div className="nhsuk-tabs__panel" id={id} {...rest}>
    {children}
  </div>
);

const TabsComponent = forwardRef<HTMLDivElement, TabsProps>((props, forwardedRef) => {
  const { children, className, ...rest } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLDivElement>());
  const [instance, setInstance] = useState<TabsModule>();

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      return;
    }

    const { current: $root } = moduleRef;

    import('nhsuk-frontend').then(({ Tabs }) => {
      setInstance(new Tabs($root));
    });
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
});

TabsComponent.displayName = 'Tabs';
TabTitle.displayName = 'Tabs.Title';
TabList.displayName = 'Tabs.List';
TabListItem.displayName = 'Tabs.ListItem';
TabContents.displayName = 'Tabs.Contents';

export const Tabs = Object.assign(TabsComponent, {
  Title: TabTitle,
  List: TabList,
  ListItem: TabListItem,
  Contents: TabContents,
});
