const initialState = {
    id: "",
    name: "",
    description: "",
    planet: "",
    durationInDays: "",
    date: "",
    candidates: []
}

export const tripDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TRIP_DETAIL":
            return action.payload.trip;
        default:
            return state;
    }
}