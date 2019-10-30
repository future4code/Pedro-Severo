import { combineReducers } from 'redux'
import ids from './ids'
import tasks from './tasks'
import filterTasks from './filterTasks'

const rootReducer = combineReducers ({
	ids: ids,
	tasks: tasks,
	filterTasks: filterTasks,
})

export default rootReducer