import { ADD_TASK, COMPLETE_TASK } from '../constants/constantsActions'

const initialState = [{
    
}]


export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                text: action.payload.text,
                id: Date.now(),
                completed: false,
            }
            return [...state, newTask];
        case COMPLETE_TASK:
            return [...state]
        default:
            return state;        
    }
}