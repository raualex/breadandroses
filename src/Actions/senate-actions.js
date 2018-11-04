export const getSenateInfo = (senateInfo) => ({
  type: "GET_SENATE",
  senateMembers: senateInfo
})

export const filterSenate = (state) => ({
  type: "FILTER_SENATE",
  state: state
})

export const getSenateHearings = (hearingsList) => ({
  type: "GET_SENATE_HEARINGS",
  senateHearings: hearingsList
})