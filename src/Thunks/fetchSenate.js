import { isLoading, hasErrored } from '../Actions';
import { getSenateInfo } from '../Actions/senate-actions';
import { getSenate, getMemberContact } from '../Utils/API/API';

export const fetchSenate = () => {

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const senateInfo = await getSenate()
      if (senateInfo) {
        dispatch(isLoading(false))
      }
      const unresolvedPromises = senateInfo.map( async (member) => {
        const contactInfo = await getMemberContact(member.id)
        const newMember = Object.assign({}, member, contactInfo)
        return newMember
      })
      const fullSenateInfo = await Promise.all(unresolvedPromises)
      dispatch(getSenateInfo(fullSenateInfo))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}