import React, { HTMLProps, ReactNode } from 'react';
import { ErrorMessage, Hint, Label } from '../..';

export interface BaseFormElementProps {
  id?: string;
  name?: string;
  label?: ReactNode;
  labelProps?: React.ComponentProps<typeof Label>;
  error?: ReactNode;
  errorProps?: React.ComponentProps<typeof ErrorMessage>;
  hint?: ReactNode;
  hintProps?: React.ComponentProps<typeof Hint>;
  // formGroupProps?: HTMLProps<HTMLDivElement>;
}

export type FormElementProps<T = HTMLElement> = Omit<HTMLProps<T>, 'label'> & BaseFormElementProps;

export enum InputType {
  INPUT = 'input',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  CHECKBOXES = 'checkboxes',
  RADIOS = 'radios',
  DATE_INPUT = 'dateinput',
}
