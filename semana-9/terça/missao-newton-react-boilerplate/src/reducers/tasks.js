import { ADD_TODO } from './actionTypes'

const initialState = [{
    id: 0,
    text: "dsadasdasds"
}]

const tasks = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
    case ADD_TODO:
        const newTask = {
            id: Date.now,
            text: action.playload.text,
        }
		return [ ...state, newTask ]
	default:
		return state 
    }
}

export default tasks