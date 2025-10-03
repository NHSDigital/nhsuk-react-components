import { type FC } from 'react';
import { Icon, type IconProps } from '../Icon';

export const ChevronRightCircleIcon: FC<IconProps> = (props) => (
  <Icon modifier="chevron-right-circle" {...props}>
    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-.3 5.8a1 1 0 1 0-1.5 1.4l2.9 2.8-2.9 2.8a1 1 0 0 0 1.5 1.4l3.5-3.5c.4-.4.4-1 0-1.4Z" />
  </Icon>
);
