import * as deprecatedIndex from '../index';

describe('DeprecatedIndex', () => {
  it('contains all expected elements', () => {
    expect(Object.keys(deprecatedIndex)).toEqual(['Panel', 'Promo']);
  });
});
