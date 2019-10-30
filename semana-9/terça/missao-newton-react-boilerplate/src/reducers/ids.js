import { DELETE_TODO } from './actionTypes';

const initialState = {
    idTaskDeleted = -1
};

const ids = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODO:
            return {...state, idTaskDeleted: action.payload.id };
        default:
            return state;
    }
};

export default ids;