import React from 'react';
import Loading from './';
import { shallow } from 'enzyme';

describe('Loading', () => {

  it('should match the snapshot', () => {
    
    let wrapper = shallow(<Loading />)

    expect(wrapper).toMatchSnapshot()
  });
});