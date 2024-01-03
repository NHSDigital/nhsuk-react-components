import React, { HTMLProps, ComponentProps } from 'react';
import classNames from 'classnames';
import Card from '../../components/card';
import type { AsElementLink } from '../../util/types/LinkTypes';


const ListPanelHeading: React.FC<ComponentProps<typeof Card.Heading>> = ({
  children,
  className,
  ...rest
}) => (
  <Card.Heading className={classNames("nhsuk-u-font-size-24", className)} {...rest}>
    {children}
  </Card.Heading>
);
ListPanelHeading.displayName = 'ListPanel.Heading';


const ListPanelList: React.FC<HTMLProps<HTMLUListElement>> = ({ className, ...rest }) => (
  <ul className={classNames('nhsuk-list nhsuk-list--border', className)} {...rest} />
);
ListPanelList.displayName = 'ListPanel.List';

const ListPanelBackToTop: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children = 'Back to top',
  asElement: Component = 'a',
  className,
  ...rest
}) => (
  <div className="nhsuk-back-to-top">
    <Component className={classNames("nhsuk-back-to-top__link", className)} {...rest}>
      {children}
    </Component>
  </div>
)
ListPanelBackToTop.displayName = 'ListPanel.BackToTop';

interface ListPanel extends React.FC<ComponentProps<typeof Card>> {
  Heading: typeof ListPanelHeading;
  List: typeof ListPanelList;
  BackToTop: typeof ListPanelBackToTop;
}

const ListPanel: ListPanel = ({
  children,
  ...rest
}) => (
    <Card feature {...rest}>
      <Card.Content>
        {children}
      </Card.Content>
    </Card>
);

ListPanel.Heading = ListPanelHeading;
ListPanel.List = ListPanelList;
ListPanel.BackToTop = ListPanelBackToTop;


export default ListPanel;


