import React from 'react';
import TransactionalServiceName from '../TransactionalServiceName';
import { mount } from 'enzyme';

describe('TransactionalServiceName long variant deprecation warning', () => {
  jest.spyOn(console, 'warn').mockImplementation();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not warn when long is false', () => {
    const spy = jest.spyOn(console, 'warn');
    const component = mount(<TransactionalServiceName />);
    expect(spy).not.toHaveBeenCalled();
    component.unmount();
  });
});
