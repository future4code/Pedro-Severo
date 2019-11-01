import { ADD_TASK } from '../constants/constantsActions';


export const addTask = (text, id, completed) => ({
    type: ADD_TASK,
    payload: {
        text: text,
        id: id,
        completed: completed,
    }
})