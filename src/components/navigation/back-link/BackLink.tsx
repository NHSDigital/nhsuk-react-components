import * as React from 'react';
import classNames from 'classnames';

export interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className }) => (
  <nav className={classNames('nhsuk-breadcrumb', className)} aria-label="Breadcrumb">
    <ol className="nhsuk-breadcrumb__list">
      {children}
    </ol>
  </nav>
);

export default Breadcrumb;
