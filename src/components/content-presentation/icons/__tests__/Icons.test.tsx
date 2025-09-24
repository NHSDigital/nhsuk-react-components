import React from 'react';
import { render } from '@testing-library/react';
import * as Icons from '../';

describe('Icons', () => {
  it('all icons match snapshots', () => {
    Object.entries(Icons).forEach((icon) => {
      const [name, Icon] = icon;

      const { container } = render(<Icon />);

      expect(container).toMatchSnapshot(name);
    });
  });
});
