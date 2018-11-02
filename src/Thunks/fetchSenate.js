import { isLoading, hasErrored } from '../Actions';
import { getSenateInfo } from '../Actions/senate-actions'
import { getSenate, getMemberContact } from '../Utils/API/API';

export const fetchSenate = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const senateInfo = await getSenate()
      if (senateInfo) {
        dispatch(isLoading(false))
      }
      dispatch(getSenateInfo(senateInfo))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}