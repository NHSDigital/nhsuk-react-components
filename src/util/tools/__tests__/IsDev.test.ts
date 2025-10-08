import { isDev } from '..';

describe('isDev', () => {
  it('in test environment', () => {
    expect(isDev()).toBe(true);
  });
});
