import { type FC } from 'react';

import { Icon, type IconProps } from '../Icon.js';

export const ArrowRightCircleIcon: FC<IconProps> = (props) => (
  <Icon modifier="arrow-right-circle" {...props}>
    <path d="M12 2a10 10 0 0 0-10 9h11.7l-4-4a1 1 0 0 1 1.5-1.4l5.6 5.7a1 1 0 0 1 0 1.4l-5.6 5.7a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4l4-4H2A10 10 0 1 0 12 2z" />
  </Icon>
);
