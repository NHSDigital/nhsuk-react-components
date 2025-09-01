import React, { FC } from 'react';

type DividerProps = {
  dividerText?: string;
};

const CheckboxesDivider: FC<DividerProps> = ({ dividerText = 'or' }) => (
  <div className="nhsuk-checkboxes__divider">{dividerText}</div>
);

export default CheckboxesDivider;
