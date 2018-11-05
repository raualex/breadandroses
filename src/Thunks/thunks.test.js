import { fetchSenate } from './fetchSenate';
import { fetchHouse } from './fetchHouse';
import { fetchSHearings } from './senateHearings';
import { fetchHHearings } from './houseHearings';
import { isLoading, hasErrored } from '../Actions';
import { getSenateInfo, getSenateHearings } from '../Actions/senate-actions';
import { getHouseInfo, getHouseHearings } from '../Actions/house-actions';
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

  it('should dispatch with isLoading(false) when fetch returns data', async () => {
    API.getSenate = jest.fn(() => Promise.resolve([ { id: 27, name: 'Bernie Sanders' } ]))
    const thunk = await fetchSenate()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should fire getMemberContact with correct params', async () => {
    API.getSenate = jest.fn(() => Promise.resolve([ { id: 27, name: 'Bernie Sanders' } ]))
    API.getMemberContact = jest.fn(() => Promise.resolve( { phone: '555-5555' } ))
    const thunk = await fetchSenate()

    await thunk(mockDispatch)
    expect(API.getMemberContact).toHaveBeenCalledWith(27)
  });

  it('should fire dispatch with getSenateInfo action creator', async () => {
    const mockSenateAction = getSenateInfo([ { id: 27, name: 'Bernie Sanders', phone: '555-5555' } ])
    API.getSenate = jest.fn(() => Promise.resolve([ { id: 27, name: 'Bernie Sanders' } ]))
    API.getMemberContact = jest.fn(() => Promise.resolve( { phone: '555-5555' } ))
    const thunk = await fetchSenate()

    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(mockSenateAction)
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

 it('should dispatch with isLoading(false) when fetch returns data', async () => {
    API.getHouse = jest.fn(() => Promise.resolve([ { id: 6, name: 'Jared Polis' } ]))
    const thunk = await fetchHouse()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should fire getMemberContact with correct params', async () => {
    API.getHouse = jest.fn(() => Promise.resolve([ { id: 6, name: 'Jared Polis' } ]))
    API.getMemberContact = jest.fn(() => Promise.resolve( { phone: '555-5555' } ))
    const thunk = await fetchHouse()

    await thunk(mockDispatch)
    expect(API.getMemberContact).toHaveBeenCalledWith(6)
  });

  it('should fire dispatch with getHouseInfo action creator', async () => {
    const mockHouseAction = getHouseInfo([ { id: 6, name: 'Jared Polis', phone: '555-5555' } ])
    API.getHouse = jest.fn(() => Promise.resolve([ { id: 6, name: 'Jared Polis' } ]))
    API.getMemberContact = jest.fn(() => Promise.resolve( { phone: '555-5555' } ))
    const thunk = await fetchHouse()

    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(mockHouseAction)
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

  it('should dispatch with isLoading(false) when fetch returns data', async () => {
    API.fetchSenateHearings = jest.fn(() => Promise.resolve([ { title: 'Hearing 1', url: 'something.com' } ]))
    const thunk = await fetchSHearings()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should fire dispatch with getSenateHearings action creator', async () => {
    const mockHearingAction = getSenateHearings([ { title: 'Hearing 1', url: 'something.com' } ])
    API.fetchSenateHearings = jest.fn(() => Promise.resolve([ { title: 'Hearing 1', url: 'something.com' } ]))
    const thunk = await fetchSHearings()

    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(mockHearingAction)
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

  it('should dispatch with isLoading(false) when fetch returns data', async () => {
    API.fetchHouseHearings = jest.fn(() => Promise.resolve([ { title: 'Hearing 2', url: 'somethingelse.com' } ]))
    const thunk = await fetchHHearings()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should fire dispatch with getHouseHearings action creator', async () => {
    const mockHearingAction = getHouseHearings([ { title: 'Hearing 2', url: 'somethingelse.com' } ])
    API.fetchHouseHearings = jest.fn(() => Promise.resolve([ { title: 'Hearing 2', url: 'somethingelse.com' } ]))
    const thunk = await fetchHHearings()

    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(mockHearingAction)
  });
});