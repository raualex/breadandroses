import { isLoading, hasErrored } from '../Actions';
import { getSenateInfo } from '../Actions/senate-actions'
import { getSenate } from '../Utils/API/API';

export const fetchSenate = () => {
  console.log('thunk')
  return async (dispatch) => {
    dispatch(isLoading(true))
    const senateInfo = await getSenate()
    dispatch(getSenateInfo(senateInfo))
  }
}