import { type FC } from 'react';

export type CheckboxesDividerProps = {
  dividerText?: string;
};

export const CheckboxesDivider: FC<CheckboxesDividerProps> = ({ dividerText = 'or' }) => (
  <div className="nhsuk-checkboxes__divider">{dividerText}</div>
);

CheckboxesDivider.displayName = 'Checkboxes.Divider';
