import { fetchSenate } from './fetchSenate';
import { fetchHouse } from './fetchHouse';
import { fetchSHearings } from './senateHearings';
import { fetchHHearings } from './houseHearings';
import { isLoading, hasErrored } from '../Actions';
import * as API from '../Utils/API/API';

describe('fetchSenate thunk', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn()
  });
  
  it('should dispatch with the isLoading action',() => {
    const thunk = fetchSenate()

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should fire getSenate', () => {
    API.getSenate = jest.fn()
    const thunk = fetchSenate()

    thunk(mockDispatch)

    expect(API.getSenate).toHaveBeenCalled()
  });

  xit('should dispatch with isLoading(false) when fetch returns data', () => {
    API.getSenate = jest.fn(() => ([ { name: 'Bernie Sanders' } ]))
    const thunk = fetchSenate()

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});

describe('fetchHouse thunk', () => {
    let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn()
  });
  
  it('should dispatch with the isLoading action',() => {
    const thunk = fetchHouse()

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should fire getHouse', () => {
    API.getHouse = jest.fn()
    const thunk = fetchHouse()

    thunk(mockDispatch)

    expect(API.getHouse).toHaveBeenCalled()
  });

 xit('should dispatch with isLoading(false) when fetch returns data', () => {
    API.getHouse = jest.fn(() => ([ { name: 'Jared Polis' } ]))
    const thunk = fetchHouse()

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
});

describe('fetchSHearings thunk', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn()
  });

  it('should dispatch with the isLoading action',() => {
    const thunk = fetchSHearings()

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should fire fetchSenateHearings', () => {
    API.fetchSenateHearings = jest.fn()
    const thunk = fetchSHearings()

    thunk(mockDispatch)

    expect(API.fetchSenateHearings).toHaveBeenCalled()
  });
});

describe('fetchHHearings thunk', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn()
  });

  it('should dispatch with the isLoading action',() => {
    const thunk = fetchHHearings()

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should fire fetchHouseHearings', () => {
    API.fetchHouseHearings = jest.fn()
    const thunk = fetchHHearings()

    thunk(mockDispatch)

    expect(API.fetchHouseHearings).toHaveBeenCalled()
  });
});