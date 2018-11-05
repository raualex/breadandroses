export const getHouseInfo = (houseInfo) => ({
  type: "GET_HOUSE",
  houseMembers: houseInfo
})

export const filterHouse = (state) => ({
  type: "FILTER_HOUSE",
  state: state
})

export const getHouseHearings = (hearingsList) => ({
  type: "GET_HOUSE_HEARINGS",
  houseHearings: hearingsList
})