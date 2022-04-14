import classNames from 'classnames';
import React from 'react';
import ConditionalFormGroup from '../../util/ConditionalFormGroup';
import useFormComponent, { FormElementProps, InputType } from '../../util/hooks/UseFormComponent';
import LabelBlock from '../../util/LabelBlock';

const Textarea = React.forwardRef<HTMLTextAreaElement, FormElementProps<HTMLTextAreaElement>>(
  (props, ref) => {
    const { renderProps, labelBlockProps } = useFormComponent(InputType.TEXTAREA, props);
    const { className, ...rest } = renderProps;

    return (
      <ConditionalFormGroup>
        <LabelBlock {...labelBlockProps} />
        <textarea
          className={classNames(
            'nhsuk-textarea',
            { 'nhsuk-textarea--error': props.error },
            className,
          )}
          {...rest}
          ref={ref}
        />
      </ConditionalFormGroup>
    );
  },
);
Textarea.displayName = 'Textarea';

export default Textarea;
