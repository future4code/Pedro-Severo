const initialState = {
    
};

export const postDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POST_DETAIL":
            return action.payload.postDetail
        default:
            return state
    };
};

export default postDetailReducer