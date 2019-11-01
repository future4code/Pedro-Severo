import { ADD_TASK } from '../constants/constantsActions'

const initialState = [{
    text: "blabla"
}]


export const tasks = (state = initialState, action) => {
    // switch (action.type) {
    //     case ADD_TASK:
    //         const newTask = {
    //             text: action.payload.text,
    //         }
    //         return [newTask, ...state];
    //     default:
    //         return state;        
    // }
    return state;
}