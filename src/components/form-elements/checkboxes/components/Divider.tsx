import React, { type FC } from 'react';

type DividerProps = {
  dividerText?: string;
};

export const CheckboxesDivider: FC<DividerProps> = ({ dividerText = 'or' }) => (
  <div className="nhsuk-checkboxes__divider">{dividerText}</div>
);

CheckboxesDivider.displayName = 'Checkboxes.Divider';
