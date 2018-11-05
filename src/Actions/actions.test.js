import * as SenateActions from './senate-actions';
import * as HouseActions from './house-actions';
import * as GeneralActions from './';

const mockArray = [
  { name: 'Bernie Sanders', party: 'I', state: 'VT', website: 'www.sanders.org', twitter: 'sanders', facebook: 'sanders', phone_number: '555-5555' }
]

describe('General Action Creators', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedLoading = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = GeneralActions.isLoading(true)
    expect(result).toEqual(expectedLoading)
  });
  
  it('should have a type of HAS_ERRORED', () => {
    const expectedErrored = {
      type: 'HAS_ERRORED',
      hasErrored: false
    }

    const result = GeneralActions.hasErrored(false)
    expect(result).toEqual(expectedErrored)
  });
});

describe('Senate Action Creators', () => {
  it('should have a type of GET_SENATE', () => {
    const expectedSenateAction = {
      type: "GET_SENATE",
      senateMembers: [
        { name: 'Bernie Sanders', party: 'I', state: 'VT', website: 'www.sanders.org', twitter: 'sanders', facebook: 'sanders', phone_number: '555-5555' }
      ]
    }

    const result = SenateActions.getSenateInfo(mockArray)
    expect(result).toEqual(expectedSenateAction)  
  });

  it('should have a type of FILTER_SENATE', () => {
    const expectedSenateAction = {
      type: "FILTER_SENATE",
      state: 'NJ'
    }

    const result = SenateActions.filterSenate('NJ')
    expect(result).toEqual(expectedSenateAction)
  });

  it('should have a type of GET_SENATE_HEARINGS', () => {
    const expectedSenateAction = {
      type: "GET_SENATE_HEARINGS",
      senateHearings: [
        { title: 'Hearing 1', url: 'none' }
      ]
    }

    const result = SenateActions.getSenateHearings([{ title: 'Hearing 1', url: 'none' }])
    expect(result).toEqual(expectedSenateAction)
  });
});

describe('House Action Creators', () => {
  it('should have a type of GET_HOUSE', () => {
    const expectedHouseAction = {
      type: "GET_HOUSE",
      houseMembers: [
        { name: 'Bernie Sanders', party: 'I', state: 'VT', website: 'www.sanders.org', twitter: 'sanders', facebook: 'sanders', phone_number: '555-5555' }
      ]
    }

    const result = HouseActions.getHouseInfo(mockArray)
    expect(result).toEqual(expectedHouseAction)
  });

    it('should have a type of FILTER_HOUSE', () => {
    const expectedHouseAction = {
      type: "FILTER_HOUSE",
      state: 'NJ'
    }

    const result = HouseActions.filterHouse('NJ')
    expect(result).toEqual(expectedHouseAction)
  });

  it('should have a type of GET_HOUSE_HEARINGS', () => {
    const expectedHouseAction = {
      type: "GET_HOUSE_HEARINGS",
      houseHearings: [
        { title: 'Hearing 1', url: 'none' }
      ]
    }

    const result = HouseActions.getHouseHearings([{ title: 'Hearing 1', url: 'none' }])
    expect(result).toEqual(expectedHouseAction)
  });
});