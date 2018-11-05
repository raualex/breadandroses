import React from 'react';
import ErrorPage from './';
import { shallow } from 'enzyme';

describe('ErrorPage', () => {

  it('should match the snapshot', () => {
    
    let wrapper = shallow(<ErrorPage />)

    expect(wrapper).toMatchSnapshot()
  });
});