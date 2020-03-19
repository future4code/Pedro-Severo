const initialState = {
  currentProfile: null,
  matches: []
}

const profile = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PROFILE":
      const newState = {
        ...state,
        currentProfile: action.payload.profile
      }
      return newState
    case "CHOOSE_PROFILE":
      if (action.payload.choice) {
        state.matches.push(state.currentProfile)
        console.log(state)
      }
      return state
    default:
      return state
  }
}

export default profile