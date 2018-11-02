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
      console.log('reducer')
      return [...state, action.senateMembers]
    default:
      return state;
  }
}