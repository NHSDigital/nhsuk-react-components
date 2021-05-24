import React from 'react';
import { mount } from 'enzyme';
import Icons from '..';

describe('Icons', () => {
  it('all icons match snapshots', () => {
    Object.entries(Icons).forEach((icon) => {
      const [name, Component] = icon;
      const Icon = Component as React.FC<React.HTMLProps<SVGSVGElement>>;
      const mountedIcon = mount(<Icon />);
      expect(mountedIcon).toMatchSnapshot(name);
      mountedIcon.unmount();
    });
  });
});
