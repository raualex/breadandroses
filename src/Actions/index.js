export const isLoading = (bool) => ({
   type: 'IS_LOADING',
   isLoading: bool
})
  
export const hasErrored = (bool) => ({
   type: 'HAS_ERRORED',
   hasErrored: bool
})

export const committeeFetchDataSuccess = (committeeData) => ({
   type: 'COMMITTEE_FETCH_DATA_SUCCESS',
   committeeData
})