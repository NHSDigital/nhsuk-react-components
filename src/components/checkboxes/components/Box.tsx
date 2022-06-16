import classNames from 'classnames';
import React, {
  ChangeEventHandler,
  ComponentProps,
  HTMLProps,
  ReactNode,
  useMemo,
  useState,
} from 'react';
import { useFormChild } from '../../../util/hooks/UseFormChildren';
import Hint from '../../hint';
import Label from '../../label';

type BoxProps = HTMLProps<HTMLInputElement> & {
  hint?: ReactNode;
  hintProps?: ComponentProps<typeof Hint>;
  conditional?: ReactNode;
};

const CheckboxesBox = React.forwardRef<HTMLInputElement, BoxProps>((props, ref) => {
  const [showConditional, setShowConditional] = useState(
    Boolean(props.checked ?? props.defaultChecked),
  );
  const { register, getData } = useFormChild();
  const reference = useMemo(() => register(props), [props]);
  const data = getData(reference);

  const { children, hint, hintProps, conditional, ...rest } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.persist();
    const shouldShowConditional = props.checked ?? event.target.checked;

    if (shouldShowConditional !== showConditional) {
      setShowConditional(shouldShowConditional);
    }

    return props.onChange ? props.onChange(event) : true;
  };

  return (
    <>
      <div className="nhsuk-checkboxes__item">
        <input
          {...rest}
          className={classNames('nhsuk-checkboxes__input', props.className)}
          type="checkbox"
          ref={ref}
          id={data.id}
          name={data.name}
          aria-controls={
            conditional === undefined ? props['aria-controls'] : `${data.id}--conditional`
          }
          aria-expanded={conditional === undefined ? props['aria-expanded'] : showConditional}
          onChange={handleChange}
        />
        <Label className="nhsuk-checkboxes__label" htmlFor={data.id}>
          {children}
        </Label>
        {hint && (
          <Hint
            {...hintProps}
            className={classNames('nhsuk-checkboxes__hint', hintProps?.className)}
          >
            {hint}
          </Hint>
        )}
      </div>
      <BoxConditional
        id={`${data.id}--conditional`}
        shown={showConditional}
        conditional={props.conditional}
      />
    </>
  );
});
CheckboxesBox.displayName = 'Checkboxes.Box';

type BoxConditionalProps = HTMLProps<HTMLDivElement> & {
  id: string;
  shown: boolean;
  conditional?: ReactNode;
};

const BoxConditional: React.FC<BoxConditionalProps> = ({
  conditional,
  className,
  shown,
  ...rest
}) => {
  if (conditional === undefined) return null;
  return (
    <div
      className={classNames(
        'nhsuk-checkboxes__conditional',
        {
          'nhsuk-checkboxes__conditional--hidden': !shown,
        },
        className,
      )}
      {...rest}
    >
      {conditional}
    </div>
  );
};

export default CheckboxesBox;
