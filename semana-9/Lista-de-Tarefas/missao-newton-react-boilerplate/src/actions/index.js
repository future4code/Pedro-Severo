import { ADD_TASK, COMPLETE_TASK } from '../constants/constantsActions';


export const addTask = (text, id, completed) => ({
    type: ADD_TASK,
    payload: {
        text: text,
        id: id,
        completed: completed,
    }
});

export const completeTask = (id, completed) => ({
    type: COMPLETE_TASK,
    payload: {
        id: id,
        completed: !completed,
    }
})