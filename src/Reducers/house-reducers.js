export const houseCommittee = (state = [], action) => {
  switch (action.type) {
    case "GET_HOUSE":
      return [...action.houseMembers]
    default:
      return state;
  }
}