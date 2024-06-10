import React, {
  FC,
  ForwardRefExoticComponent,
  forwardRef,
  HTMLProps,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import classNames from 'classnames';
import useDevWarning from '@util/hooks/UseDevWarning';

const DefaultErrorSummaryTitleID = 'error-summary-title';

const ErrorSummaryTitle: FC<HTMLProps<HTMLHeadingElement>> = ({
  className,
  id = DefaultErrorSummaryTitleID,
  ...rest
}) => (
  <h2 className={classNames('nhsuk-error-summary__title', className)} id={id} {...rest} />
);


const ErrorSummaryBody: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-error-summary__body', className)} {...rest} />
);

const ErrorSummaryList: FC<HTMLProps<HTMLUListElement>> = ({ className, ...rest }) => (
  <ul className={classNames('nhsuk-list', 'nhsuk-error-summary__list', className)} {...rest} />
);

const ErrorSummaryListItem: FC<HTMLProps<HTMLAnchorElement>> = (props) => (
  <li>
    <a {...props} />
  </li>
);

interface ErrorSummary
  extends ForwardRefExoticComponent<
    PropsWithoutRef<HTMLProps<HTMLDivElement>> & RefAttributes<HTMLDivElement>
  > {
  Title: FC<HTMLProps<HTMLHeadingElement>>;
  Body: FC<HTMLProps<HTMLDivElement>>;
  List: FC<HTMLProps<HTMLUListElement>>;
  Item: FC<HTMLProps<HTMLAnchorElement>>;
}

const ErrorSummaryDiv = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
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
