import React from 'react';
import MemberContainer from './';
import { shallow } from 'enzyme';
jest.mock('uuid', () => jest.fn(() => 1));

describe('MemberContainer', () => {
  let wrapper;
  let mockCongress = [ { name: 'Bernie Sanders', party: 'I', state: 'VT', website: 'www.sanders.org', twitter: 'sanders', facebook: 'sanders', phone_number: '555-5555' } ]
  let mockFilter = jest.fn()
  let mockReset = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<MemberContainer congress={mockCongress} navClicked={'senate'} filterState={mockFilter} resetFilter={mockReset} />)
  })
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should fire filterState in handleChange function', () => {
    let mockEvent = { target: { value: 'New Jersey - NJ' } }

    wrapper.instance().handleChange(mockEvent)
    expect(mockFilter).toHaveBeenCalledWith('NJ')
  });
});
