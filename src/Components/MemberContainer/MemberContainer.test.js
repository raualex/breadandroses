import React from 'react';
import MemberContainer from './';
import { shallow } from 'enzyme';
jest.mock('uuid', () => jest.fn(() => 1));

describe('MemberContainer', () => {
  let wrapper;
  let mockCongress = [ { name: 'Bernie Sanders', party: 'I', state: 'VT', website: 'www.sanders.org', twitter: 'sanders', facebook: 'sanders', phone_number: '555-5555' } ]

  beforeEach(() => {
    wrapper = shallow(<MemberContainer congress={mockCongress} />)
  })
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})
