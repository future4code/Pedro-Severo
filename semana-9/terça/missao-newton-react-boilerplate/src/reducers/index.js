import { combineReducers } from 'redux'
import ids from './ids';
import textTasks from './textTasks';
import filterTasks from './filterTasks';

const rootReducer = combineReducers ({
    ids: ids,
    textTasks: textTasks,
    filterTasks: filterTasks,
});

export default rootReducer;