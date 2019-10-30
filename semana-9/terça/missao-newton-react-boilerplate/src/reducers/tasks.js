import { ADD_TODO } from './actionTypes'

const initialState = [{
    text: "dsadasdasds",
}]

const tasks = (state = initialState, action) => {
	switch (action.type) {
	case ADD_TODO:
		return { ...state, inicialText: action.playload.text }
	default:
		return state 
	}
}

export default tasks