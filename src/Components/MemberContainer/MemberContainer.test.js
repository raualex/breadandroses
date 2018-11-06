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
  
  it('matches the snapshot with senate passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('matches the snapshot with senate passed in', () => {
    wrapper = shallow(<MemberContainer congress={mockCongress} navClicked={'house'} filterState={mockFilter} resetFilter={mockReset} />)
    expect(wrapper).toMatchSnapshot()
  });

  it('matches the snapshot with no congress array passed in', () => {
    wrapper = shallow(<MemberContainer congress={[]} navClicked={'house'} filterState={mockFilter} resetFilter={mockReset} />)
    expect(wrapper).toMatchSnapshot()
  });

  describe('handleChange function', () => {
    it('should update state', () => {
      let mockState = { select: '' }
      let mockNewState = { select: 'NJ' }
      let mockEvent = { target: { value: 'NJ' } }

      expect(wrapper.state()).toEqual(mockState)
      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state()).toEqual(mockNewState)
    });

    it('should fire filterState with correct params', () => {
      let mockEvent = { target: { value: 'NJ' } }

      wrapper.instance().handleChange(mockEvent)
      expect(mockFilter).toHaveBeenCalledWith('NJ', 'senate')
    });

    it('should not update state if filter has already been applied', () => {
      wrapper.instance().setState({ select: 'NJ' })
      let mockEvent = { target: { value: 'CO' } }

      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state()).toEqual({ select: 'NJ' })
    });
  });

  describe('handleReset function', () => {
    it('should reset state', () => {
      let mockEvent = { preventDefault: jest.fn() }

      wrapper.instance().setState({ select: 'VA' })
      expect(wrapper.state()).toEqual({ select: 'VA' })

      wrapper.instance().handleReset(mockEvent)
      expect(wrapper.state()).toEqual({ select: '' })
    });

    it('should fire resetFilter', () => {
      let mockEvent = { preventDefault: jest.fn() }

      wrapper.instance().handleReset(mockEvent)
      expect(mockReset).toHaveBeenCalled()
    });
  });
});
