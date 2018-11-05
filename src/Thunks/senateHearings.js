import { isLoading, hasErrored } from '../Actions';
import { getSenateHearings } from '../Actions/senate-actions'
import { fetchSenateHearings } from '../Utils/API/API';

export const fetchSHearings = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const senateHearings = await fetchSenateHearings()
      if (senateHearings) {
        dispatch(isLoading(false))
      }
      dispatch(getSenateHearings(senateHearings))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}