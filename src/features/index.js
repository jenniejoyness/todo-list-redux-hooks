import {combineReducers} from 'redux'
import tasksSlice from './tasks/tasksSlice'
import taskCounterSlice from './taskCounter/taskCounterSlice'

export default combineReducers({
    taskList: tasksSlice,
    taskCounter: taskCounterSlice
})