import IsDev from '../IsDev';

describe('IsDev', () => {
  it('in test environment', () => {
    expect(IsDev()).toBe(true);
  });
});
