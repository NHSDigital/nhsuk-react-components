import React, { HTMLProps } from 'react';

interface HeadingLevelProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
}

export type HeadingLevelType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6';

const HeadingLevel: React.FC<HeadingLevelProps> = ({ headingLevel='h3', ...rest }) => {
  switch (headingLevel.toLowerCase()) {
    case 'h1':
      return <h1 {...rest} />;
    case 'h2':
      return <h2 {...rest} />;
    case 'h3':
      return <h3 {...rest} />;
    case 'h4':
      return <h4 {...rest} />;
    case 'h5':
      return <h5 {...rest} />;
    case 'h6':
      return <h6 {...rest} />;
    default:
      console.error(`HeadingLevel: Invalid headingLevel prop: ${headingLevel}`);
      return <h3 {...rest} />;
  }
};

export default HeadingLevel;
