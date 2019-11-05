const initialState = [];

export const tripsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TRIPS":
            return action.payload.tripsList;
        default:
            return state
    }
}