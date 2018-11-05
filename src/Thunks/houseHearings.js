import { isLoading, hasErrored } from '../Actions';
import { getHouseHearings } from '../Actions/house-actions'
import { fetchHouseHearings } from '../Utils/API/API';

export const fetchHHearings = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const houseHearings = await fetchHouseHearings()
      if (houseHearings) {
        dispatch(isLoading(false))
      }
      dispatch(getHouseHearings(houseHearings))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}