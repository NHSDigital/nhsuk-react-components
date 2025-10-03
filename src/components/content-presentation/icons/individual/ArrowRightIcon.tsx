import { type FC } from 'react';
import { Icon, type IconProps } from '..';

export const ArrowRightIcon: FC<IconProps> = (props) => (
  <Icon modifier="arrow-right" {...props}>
    <path d="m14.7 6.3 5 5c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H5a1 1 0 0 1 0-2h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4Z" />
  </Icon>
);
