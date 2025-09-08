import React from 'react';
import classNames from 'classnames';

interface InsetTextProps extends React.HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: string | false;
}

const InsetText: React.FC<InsetTextProps> = ({
  className,
  children,
  visuallyHiddenText = 'Information: ',
  ...rest
}) => (
  <div className={classNames('nhsuk-inset-text', className)} {...rest}>
    {visuallyHiddenText ? (
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    ) : null}
    {children}
  </div>
);

export default InsetText;
