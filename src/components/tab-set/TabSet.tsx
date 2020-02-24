import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Col } from '../layout';

interface TabSetProps extends HTMLProps<HTMLDivElement> {
  children?: any,
  className?: string,
  style?: any,
}

interface TabProps extends HTMLProps<HTMLDivElement> {
  children?: any,
  onClick: () => {},
  className?: string,
  style?: any,
  autoSize: boolean,
  isActive: boolean,
  isDisabled: boolean,
  isEmpty: boolean,
  width: 'full' | 'three-quarters' | 'one-half' | 'two-thirds' | 'one-third' | 'one-quarter'
}

const determineClassName = (isActive: boolean, isDisabled: boolean, isEmpty: boolean):
string => {
  const activeClass = isActive ? '--active' : '';
  const disabledClass = isDisabled ? '--disabled' : '';
  const emptyClass = isEmpty ? '--empty' : '';
  return `nhs-tab-set__tab${activeClass}${disabledClass}${emptyClass}`;
};

interface TabSet extends React.FC<TabSetProps> {
  Tab: React.FC<TabProps>;
}

const TabSet: TabSet = ({
  children,
  className,
  style,
  ...rest
}) => (
  <div
    className={classNames('nhsuk-tab-set', className)}
    style={style}
    {...rest}
  >
    {children}
  </div>
);

const Tab: React.FC<TabProps> = ({
  children,
  onClick,
  className,
  style,
  isActive,
  isDisabled,
  isEmpty,
  width,
  ...rest
}) => (
  <Col
    className={classNames(
      determineClassName(isActive, isDisabled, isEmpty),
      className,
    )}
    style={style}
    onClick={onClick}
    width={width}
    {...rest}
  >
    {!isEmpty ? <span>{children}</span> : null}
  </Col>
);

TabSet.Tab = Tab;

export default TabSet;
