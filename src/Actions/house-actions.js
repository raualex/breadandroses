export const getHouseInfo = (houseInfo) => ({
  type: "GET_HOUSE",
  houseMembers: houseInfo
})

export const filterHouse = (state) => ({
  type: "FILTER_HOUSE",
  state: state
})