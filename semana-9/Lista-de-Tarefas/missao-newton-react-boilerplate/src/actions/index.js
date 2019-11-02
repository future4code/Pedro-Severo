import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from '../constants/constantsActions';


export const addTask = (text, id, completed) => ({
    type: ADD_TASK,
    payload: {
        text: text,
        id: id,
        completed: completed,
    }
});

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload: {
        id: id,
    }
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
        id: id,
    }
})