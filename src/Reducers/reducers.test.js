import * as SenateActions from '../Actions/senate-actions';
import * as HouseActions from '../Actions/house-actions';
import * as GeneralActions from '../Actions';
import { isLoading, hasErrored, senateCommittee } from './senate-reducers';
import { houseCommittee } from './house-reducers';

describe('General reducers', () => {
  
  it('should indicate if the page is loading in state', () => {
    const mockLoading = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = isLoading('', mockLoading)
    expect(result).toEqual(true)  
  });

  it('should have isLoading default to false', () => {
    const mockLoading = {
      isLoading: true
    }

    const result = isLoading(undefined, mockLoading)
    expect(result).toEqual(false)  
  })

  it('should indicate if the page has errored in state', () => {
    const mockErrored = {
      type: 'HAS_ERRORED',
      hasErrored: false
    }

    const result = hasErrored('', mockErrored)
    expect(result).toEqual(false)
  });

  it('should have hasErrored default to false', () => {
    const mockErrored = {
      hasErrored: true
    }

    const result = hasErrored(undefined, mockErrored)
    expect(result).toEqual(false)
  });
});

describe('Senate reducers', () => {
  
  it('should update state with senate info', () => {
    const mockSenate = {
      type: "GET_SENATE",
      senateMembers : [
        { name: 'Bernie Sanders', party: 'I', state: 'VT' }
      ]
    }

    const result = senateCommittee([], mockSenate)
    expect(result).toEqual(mockSenate.senateMembers)
  });

  it('should return original state as a default', () => {
    const mockSenate = {
      senateMembers : [
        { name: 'Bernie Sanders', party: 'I', state: 'VT' }
      ]
    }

    const result = senateCommittee([], mockSenate)
    expect(result).toEqual([])
  });
});

describe('House reducers', () => {
  
  it('should update state with house info', () => {
    const mockHouse = {
      type: "GET_HOUSE",
      houseMembers : [
        { name: 'Jared Polis', party: 'D', state: 'CO' }
      ]
    }

    const result = houseCommittee([], mockHouse)
    expect(result).toEqual(mockHouse.houseMembers) 
  });

  it('should return original state as a default', () => {
    const mockHouse = {
      houseMembers : [
        { name: 'Jared Polis', party: 'D', state: 'CO' }
      ]
    }

    const result = houseCommittee([], mockHouse)
    expect(result).toEqual([])
  });
});
