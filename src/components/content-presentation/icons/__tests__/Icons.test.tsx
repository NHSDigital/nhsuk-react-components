import { render } from '@testing-library/react';
import * as Icons from '..';

describe('Icons', () => {
  it('all icons match snapshots', () => {
    for (const [name, Icon] of Object.entries(Icons).filter(
      ([, Icon]) => Icon instanceof Function,
    )) {
      const { container } = render(<Icon />);
      expect(container).toMatchSnapshot(name);
    }
  });
});
