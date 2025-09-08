import React from 'react';

interface HeadingLevelProps extends React.HTMLProps<HTMLHeadingElement> {
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

const HeadingLevel: React.FC<HeadingLevelProps> = ({ headingLevel = 'h3', children, ...rest }) => {
  switch (headingLevel.toLowerCase()) {
    case 'h1':
      return <h1 {...rest}>{children}</h1>;
    case 'h2':
      return <h2 {...rest}>{children}</h2>;
    case 'h3':
      return <h3 {...rest}>{children}</h3>;
    case 'h4':
      return <h4 {...rest}>{children}</h4>;
    case 'h5':
      return <h5 {...rest}>{children}</h5>;
    case 'h6':
      return <h6 {...rest}>{children}</h6>;
    default:
      console.error(`HeadingLevel: Invalid headingLevel prop: ${headingLevel}`);
      return <h3 {...rest}>{children}</h3>;
  }
};

export default HeadingLevel;
