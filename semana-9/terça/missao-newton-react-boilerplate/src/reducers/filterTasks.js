import { SET_VISIBILITY_FILTER } from './actionTypes';

const initialState = {
    selectedFilterTask: "show_all"
};

const filterTasks = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {...state, selectedFilterTask: action.playload.filter};
        default:
            return state;
    }
};

export default filterTasks;