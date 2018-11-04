export const houseCommittee = (state = [], action) => {
  switch (action.type) {
    case "GET_HOUSE":
      return [...action.houseMembers]
    case "FILTER_HOUSE":
      return state.filter(rep => rep.state === action.state)
    default:
      return state;
  }
}