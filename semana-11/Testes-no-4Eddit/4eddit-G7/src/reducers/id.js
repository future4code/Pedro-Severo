const initialState = {
    id:"",
};


export const idReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ID":
            return {...state, id: action.payload.postId}
        default:
            return state
    }
}

export default idReducer