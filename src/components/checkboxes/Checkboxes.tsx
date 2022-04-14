import classNames from 'classnames';
import React, { ComponentProps, HTMLProps, ReactNode } from 'react';
import { useFormChildren } from '../../util/hooks/UseFormChildren';
import useFormComponent, { InputType } from '../../util/hooks/UseFormComponent';
import LabelBlock from '../../util/LabelBlock';
import Hint from '../hint';
import Box from './components/Box';
import Divider from './components/Divider';

type CheckboxesProps = HTMLProps<HTMLDivElement> & {
  hint?: ReactNode;
  hintProps?: ComponentProps<typeof Hint>;
};

type CheckboxesChildren = {
  Box: typeof Box;
  Divider: typeof Divider;
};

const Checkboxes: React.FC<CheckboxesProps> & CheckboxesChildren = (props) => {
  const { renderProps, labelBlockProps } = useFormComponent(InputType.CHECKBOXES, props);
  const { Provider } = useFormChildren(renderProps.id, renderProps.name);

  return (
    <>
      <LabelBlock {...labelBlockProps} />
      <Provider>
        <div
          {...renderProps}
          className={classNames('js-enabled nhsuk-checkboxes', renderProps.className)}
        />
      </Provider>
    </>
  );
};

Checkboxes.Box = Box;
Checkboxes.Divider = Divider;

export default Checkboxes;
