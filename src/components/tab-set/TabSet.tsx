/* eslint-disable @typescript-eslint/no-redeclare */
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import Tab, { TabProps } from './components/Tab';
import './_TabSet.scss';

interface TabSet extends React.FC<HTMLProps<HTMLDivElement>> {
  Tab: React.FC<TabProps>;
}

const TabSet: TabSet = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-tab-set', className)} {...rest} />
);

TabSet.Tab = Tab;

export default TabSet;
