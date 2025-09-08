import React, {
  forwardRef,
} from 'react';
import classNames from 'classnames';
import useDevWarning from '@util/hooks/UseDevWarning';

const DefaultErrorSummaryTitleID = 'error-summary-title';

const ErrorSummaryTitle: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  className,
  id = DefaultErrorSummaryTitleID,
  ...rest
}) => (
  <h2 className={classNames('nhsuk-error-summary__title', className)} id={id} {...rest} />
);


const ErrorSummaryBody: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-error-summary__body', className)} {...rest} />
);

const ErrorSummaryList: React.FC<React.HTMLProps<HTMLUListElement>> = ({ className, ...rest }) => (
  <ul className={classNames('nhsuk-list', 'nhsuk-error-summary__list', className)} {...rest} />
);

const ErrorSummaryListItem: React.FC<React.HTMLProps<HTMLAnchorElement>> = (props) => (
  <li>
    <a {...props} />
  </li>
);

interface ErrorSummary
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLProps<HTMLDivElement>> & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<React.HTMLProps<HTMLHeadingElement>>;
  Body: React.FC<React.HTMLProps<HTMLDivElement>>;
  List: React.FC<React.HTMLProps<HTMLUListElement>>;
  Item: React.FC<React.HTMLProps<HTMLAnchorElement>>;
}

const ErrorSummaryDiv = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({
    className,
    tabIndex = -1,
    role = 'alert',
    'aria-labelledby': ariaLabelledBy = DefaultErrorSummaryTitleID,
    ...rest
  },
    ref
  ) => {
    useDevWarning('The ErrorSummary component should always have a tabIndex of -1', () => tabIndex !== -1)
    useDevWarning('The ErrorSummary component should always have a role of alert', () => role !== 'alert')

    return (
      <div
        className={classNames('nhsuk-error-summary', className)}
        ref={ref}
        tabIndex={tabIndex}
        role={role}
        aria-labelledby={ariaLabelledBy}
        {...rest}
      />
    )
  });


ErrorSummaryDiv.displayName = 'ErrorSummary';

const ErrorSummary: ErrorSummary = Object.assign(ErrorSummaryDiv, {
  Title: ErrorSummaryTitle,
  Body: ErrorSummaryBody,
  List: ErrorSummaryList,
  Item: ErrorSummaryListItem,
});

export default ErrorSummary;
