import { ADD_TASK } from '../constants/constantsActions'

const initialState = []


export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                text: action.payload.text,
            }
            return [...state, newTask];
        default:
            return state;        
    }
}