import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { filterSenate } from '../Actions/senate-actions';
import { filterHouse } from '../Actions/house-actions';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
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
