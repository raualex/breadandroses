import React from 'react';
import Welcome from './';
import { shallow } from 'enzyme';

describe('Welcome', () => {

  it('should match the snapshot', () => {
    
    let wrapper = shallow(<Welcome />)

    expect(wrapper).toMatchSnapshot()
  });
});