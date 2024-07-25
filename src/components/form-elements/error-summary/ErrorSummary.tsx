import React, {
  FC,
  ForwardRefExoticComponent,
  forwardRef,
  HTMLProps,
  PropsWithoutRef,
  RefAttributes,
  useImperativeHandle,
  useRef,
  useEffect,
  EventHandler,
  MouseEvent,
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

/**
 * Shim for the `handleClick` function within the 'nhsuk-frontend' library.
 * Ref: https://github.com/nhsuk/nhsuk-frontend/blob/main/packages/components/error-summary/error-summary.js
 */
const useErrorSummaryListItem = (props: HTMLProps<HTMLAnchorElement>): HTMLProps<HTMLAnchorElement> => {
  const { id, href, onClick } = props;
  
  const getAssociatedLegendOrLabel = (inputEl: HTMLInputElement) => {
    const fieldset = inputEl.closest('fieldset');

    if (fieldset) {
      const legends = fieldset.getElementsByTagName('legend');
      
      if (legends.length) {
        const candidateLegend = legends[0];

        if (inputEl.type === 'checkbox' || inputEl.type === 'radio') {
          return candidateLegend;
        }

        const legendTop = candidateLegend.getBoundingClientRect().top;
        const inputRect = inputEl.getBoundingClientRect();

        if (inputRect.height && window.innerWidth) {
          const inputBottom = inputRect.top + inputRect.height;

          if (inputBottom - legendTop < window.innerHeight / 2) {
            return candidateLegend;
          }
        }
      }
    }

    return document.querySelector(`label[for="${id}"]`) || inputEl.closest('label');
  }

  const focusTarget = (event: MouseEvent<HTMLAnchorElement>): boolean => {
    if (!href) {
      return false;
    }

    const inputEl = document.querySelector<HTMLInputElement>(event.currentTarget.hash);
    if (!inputEl) {
      return false;
    }

    const legendOrLabel = getAssociatedLegendOrLabel(inputEl);
    if (!legendOrLabel) {
      return false;
    }

    legendOrLabel.scrollIntoView();
    inputEl.focus({preventScroll: true});

    return true;

  }

  const handleClick: EventHandler<MouseEvent<HTMLAnchorElement>> = (event) => {
    event.persist();

    if (focusTarget(event)) {
      event.preventDefault();
    }

    if (onClick) {
      event.persist();
      onClick(event);
    }
  }

  return {
    ...props,
    onClick: handleClick,
  }
}

const ErrorSummaryListItem: FC<HTMLProps<HTMLAnchorElement>> = (props) => {
  const renderProps = useErrorSummaryListItem(props)
  
  return (
    <li>
      <a {...renderProps} />
    </li>
  );
}

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
    autoFocus = true,
    ...rest
  },
  ref
) => {
    const divRef = useRef<HTMLDivElement>(null);

    useDevWarning('The ErrorSummary component should always have a tabIndex of -1', () => tabIndex !== -1)
    useDevWarning('The ErrorSummary component should always have a role of alert', () => role !== 'alert')

    useImperativeHandle(ref, () => divRef.current as HTMLDivElement);

    useEffect(() => {
      if (divRef.current && autoFocus) {
        divRef.current.focus();
      }
    }, [divRef.current])

    return (
      <div
        className={classNames('nhsuk-error-summary', className)}
        ref={divRef}
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
