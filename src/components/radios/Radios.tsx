import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import { useFormChildren } from '../../util/hooks/UseFormChildren';
import useFormComponent, { InputType } from '../../util/hooks/UseFormComponent';
import LabelBlock from '../../util/LabelBlock';
import Divider from './components/Divider';
import Radio from './components/Radio';

interface IRadiosProps extends HTMLProps<HTMLDivElement> {
  inline?: boolean;
}

interface IRadios extends React.FC<IRadiosProps> {
  Radio: typeof Radio;
  Divider: typeof Divider;
}

const Radios: IRadios = (props) => {
  const { renderProps, labelBlockProps } = useFormComponent(InputType.RADIOS, props);
  const { Provider } = useFormChildren(renderProps.id, renderProps.name);

  const { className, children, inline, ...rest } = renderProps;

  return (
    <div
      className={classNames('nhsuk-radios', { 'nhsuk-radios--inline': inline }, className)}
      {...rest}
    >
      <LabelBlock {...labelBlockProps} />
      <Provider>{children}</Provider>
    </div>
  );
};

Radios.Radio = Radio;
Radios.Divider = Divider;

export default Radios;
