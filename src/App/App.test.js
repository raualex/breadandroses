import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { filterSenate } from '../Actions/senate-actions';
import { filterHouse } from '../Actions/house-actions';

describe('App', () => {
  let wrapper;
  let mockSenateFunc = jest.fn()
  let mockHouseFunc = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('filterCongress function', () => {
    
    it('should should fire filterSenate with correct params if navClicked === senate', () => {
      wrapper = shallow(<App 
        filterSenate={mockSenateFunc} 
        filterHouse={mockHouseFunc} 
      />)
      wrapper.instance().filterCongress('NJ', 'senate')
      expect(mockSenateFunc).toHaveBeenCalledWith('NJ')
    });

    it('should should fire filterHouse with correct params if navClicked === house', () => {
      wrapper = shallow(<App 
        filterSenate={mockSenateFunc} 
        filterHouse={mockHouseFunc} 
      />)
      wrapper.instance().filterCongress('CO', 'house')
      expect(mockHouseFunc).toHaveBeenCalledWith('CO')
    });
  });

  describe('resetCongress function', () => {

    it('should fire fetchSenate', () => {
      wrapper = shallow(<App 
        fetchSenate={mockSenateFunc} 
        fetchHouse={mockHouseFunc} 
      />)
      wrapper.instance().resetCongress()
      expect(mockSenateFunc).toHaveBeenCalled()
    });

    it('should fire fetchHouse', () => {
      wrapper = shallow(<App 
        fetchSenate={mockSenateFunc} 
        fetchHouse={mockHouseFunc} 
      />)
      wrapper.instance().resetCongress()
      expect(mockHouseFunc).toHaveBeenCalled()
    });
  });

  describe('mapStateToProps function', () => {
    it('should return an object with senate and house arrays', () => {
      const mockState = {
        senateMembers: [ { name: 'Bernie Sanders', party: 'I', state: 'VT', website: 'www.sanders.org', twitter: 'sanders', facebook: 'sanders', phone_number: '555-5555' } ],
        houseMembers: [ { name: 'Jared Polis', party: 'D', state: 'CO', website: 'www.polis.org', twitter: 'polis', facebook: 'polis', phone_number: '555-5555' } ],
        somethingElse: [ { something: 'Else' } ]
      }
      const expected = {
        senate: [ { name: 'Bernie Sanders', party: 'I', state: 'VT', website: 'www.sanders.org', twitter: 'sanders', facebook: 'sanders', phone_number: '555-5555' } ],
        house: [ { name: 'Jared Polis', party: 'D', state: 'CO', website: 'www.polis.org', twitter: 'polis', facebook: 'polis', phone_number: '555-5555' } ]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps function', () => {
    const mockDispatch = jest.fn()
    const mockSenateStateAction = filterSenate('NJ')
    const mockHouseStateAction = filterHouse('NJ')
    let mappedProps;

    beforeEach(() => {
      mappedProps = mapDispatchToProps(mockDispatch)
    });

    it('should call dispatch with a state when filterSenate is called', () => {
      mappedProps.filterSenate('NJ')
      expect(mockDispatch).toHaveBeenCalledWith(mockSenateStateAction)
    });

    it('should call dispatch with a state when filterHouse is called', () => {
      mappedProps.filterHouse('NJ')
      expect(mockDispatch).toHaveBeenCalledWith(mockHouseStateAction)
    });

    it('should call dispatch when fetchSenate is called', () => {
      mappedProps.fetchSenate()
      expect(mockDispatch).toHaveBeenCalled()
    });

    it('should call dispatch when fetchHouse is called', () => {
      mappedProps.fetchHouse()
      expect(mockDispatch).toHaveBeenCalled()
    });
  });
});
