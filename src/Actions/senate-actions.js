export const getSenateInfo = (senateInfo) => ({
  type: "GET_SENATE",
  senateMembers: senateInfo
})

export const filterSenate = (state) => ({
  type: "FILTER_SENATE",
  state: state
})