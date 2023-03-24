import React from 'react';
import TransactionalServiceName from '../TransactionalServiceName';
import { NHSUKFrontendV5UpgradeWarnings } from '../../../../deprecated/warnings';
import { mount } from 'enzyme';

describe('TransactionalServiceName long variant deprecation warning', () => {
  jest.spyOn(console, 'warn').mockImplementation();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should warn when long is true', () => {
    const spy = jest.spyOn(console, 'warn');
    const component = mount(<TransactionalServiceName long />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe(
      NHSUKFrontendV5UpgradeWarnings.TransactionalServiceNameLongVariantRemoved,
    );
    component.unmount();
  });

  it('should not warn when long is false', () => {
    const spy = jest.spyOn(console, 'warn');
    const component = mount(<TransactionalServiceName />);
    expect(spy).not.toHaveBeenCalled();
    component.unmount();
  });
});
