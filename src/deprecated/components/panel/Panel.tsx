import React, { HTMLProps, isValidElement } from 'react';
import classNames from 'classnames';
import { Row, Col } from '../../../components/layout';
import PanelContext, { PanelContextType } from './PanelContext';
import useDevWarning from '../../../util/hooks/UseDevWarning';
import { PanelDeprecationWarning } from '../../warnings';

interface PanelProps extends HTMLProps<HTMLDivElement> {
  grey?: boolean;
  label?: string;
  labelProps?: HTMLProps<HTMLHeadingElement>;
}

interface Panel extends React.FC<PanelProps> {
  Group: React.FC<HTMLProps<HTMLDivElement>>;
}

const BasePanel: React.FC<PanelProps> = ({
  label,
  grey,
  className,
  labelProps,
  children,
  ...rest
}) => {
  useDevWarning(PanelDeprecationWarning);

  return (
    <div
      className={classNames(
        { 'nhsuk-panel': !label },
        { 'nhsuk-panel--grey': grey },
        { 'nhsuk-panel-with-label': label },
        className,
      )}
      {...rest}
    >
      {label ? (
        <h3 className="nhsuk-panel-with-label__label" {...labelProps}>
          {label}
        </h3>
      ) : null}
      {children}
    </div>
  );
};

const Panel: Panel = (props) => {
  const PanelGroupContext = React.useContext<PanelContextType | null>(PanelContext);
  let panelWidth: 'one-half' | 'one-third' | 'one-quarter' | 'full';
  if (PanelGroupContext !== null) {
    const { panelCount } = PanelGroupContext;
    switch (panelCount) {
      case 2:
        panelWidth = 'one-half';
        break;
      case 3:
        panelWidth = 'one-third';
        break;
      case 4:
        panelWidth = 'one-quarter';
        break;
      default:
        panelWidth = 'full';
        break;
    }
    return (
      <Col width={panelWidth} className="nhsuk-panel-group__item">
        <BasePanel {...props} />
      </Col>
    );
  }
  return <BasePanel {...props} />;
};

const PanelGroup: React.FC<HTMLProps<HTMLDivElement>> = ({ className, children, ...rest }) => {
  let panelCount = 0;
  React.Children.forEach(children, (child) => {
    if (child && isValidElement(child) && child.type === Panel) {
      panelCount += 1;
    }
  });
  return (
    <Row className={classNames('nhsuk-panel-group', className)} {...rest}>
      <PanelContext.Provider value={{ panelCount }}>{children}</PanelContext.Provider>
    </Row>
  );
};

Panel.Group = PanelGroup;

export default Panel;
