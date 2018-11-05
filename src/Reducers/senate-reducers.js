export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = false, action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const senateCommittee = (state = [], action) => {
  switch (action.type) {
    case "GET_SENATE":
      return [...action.senateMembers]
    case "FILTER_SENATE":
      return state.filter(senator => senator.state === action.state)
    default:
      return state;
  }
}

export const senateHearings = (state = [], action) => {
  switch (action.type) {
    case "GET_SENATE_HEARINGS":
      return action.senateHearings
    default:
      return state
  }
}