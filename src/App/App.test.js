import React from 'react';
import { App, mapStateToProps } from './App';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BrowserRouter><App /></BrowserRouter>)
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
    })
  })
})
