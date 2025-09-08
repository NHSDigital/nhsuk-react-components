import React from 'react';

type DividerProps = {
  dividerText?: string;
};

const Divider: React.FC<DividerProps> = ({ dividerText = 'or' }) => (
  <div className="nhsuk-checkboxes__divider">{dividerText}</div>
);

export default Divider;
