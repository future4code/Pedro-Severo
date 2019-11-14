const initialState = {};


export const idReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_ID":
            return action.payload.id;
        default:
            return state
    };
};