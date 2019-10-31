import { combineReducers } from 'redux'
import ids from './ids'
import tasks from './tasks'
import filterTasks from './filterTasks'




export const rootReducer = combineReducers ({
	tasks: tasks,
})

export default rootReducer