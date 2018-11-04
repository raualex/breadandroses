import React from 'react';
import { Nav, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  let mockFetchSenate = jest.fn()
  let mockFetchHouse = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Nav fetchSenate={mockFetchSenate} fetchHouse={mockFetchHouse} />)
  });
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapDispatchToProps function', () => {
    const mockDispatch = jest.fn()
    let mappedProps;

    beforeEach(() => {
      mappedProps = mapDispatchToProps(mockDispatch)
    })

    it('should call dispatch when fetchSenate is called', () => {
      mappedProps.fetchSenate()
      expect(mockDispatch).toHaveBeenCalled()
    })

    it('should call dispatch when fetchHouse is called', () => {
      mappedProps.fetchHouse()
      expect(mockDispatch).toHaveBeenCalled()
    })
  })
})
