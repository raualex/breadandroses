import { fetchSenate } from './fetchSenate';
import { fetchHouse } from './fetchHouse';
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

  it('should dispatch hasErrored(true) if error', () => {
    API.getSenate = jest.fn(() => return { status: 404, message: 'error' } )
    const thunk = fetchSenate()

    thunk(mockDispatch)

    expect
  });
});

describe('fetchHouse thunk', () => {
  
});