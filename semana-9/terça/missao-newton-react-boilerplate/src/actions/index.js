import { COMPLETE_ALL_TODOS, SET_VISIBILITY_FILTER, CLEAR_COMPLETED, ADD_TODO, DELETE_TODO } from './actionTypes';

export const completeAllTasks = () => {
    return {
        type: COMPLETE_ALL_TODOS,
    }
};

export const setTaksByFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter: filter,
        }
    };
};

export const clearTaskCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    }
};

export const addTask = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            text: text,
        }
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: id
        }
    };
};