const initialState = [{

}]

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILES':
      return action.payload.profile
    default:
      return state
  }
}

export default profiles
