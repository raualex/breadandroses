import { isLoading, hasErrored } from '../Actions';
import { getHouseInfo } from '../Actions/house-actions'
import { getHouse, getMemberContact } from '../Utils/API/API';

export const fetchHouse = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const houseInfo = await getHouse()
      if (houseInfo) {
        dispatch(isLoading(false))
      }
      const unresolvedPromises = houseInfo.map( async (member) => {
        const contactInfo = await getMemberContact(member.id)
        const newMember = Object.assign({}, member, contactInfo)
        return newMember
      })
      const fullHouseInfo = await Promise.all(unresolvedPromises)
      dispatch(getHouseInfo(fullHouseInfo))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}