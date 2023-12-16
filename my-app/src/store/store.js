import { createStore } from 'redux';
import { reducer1, studentReducer, userReduce, toDoReducer } from './reducers.js';
import { combineReducers } from 'redux';
const reducers = combineReducers({
    reducer1,
    studentReducer,
    userReduce,
    toDoReducer
})
const store = createStore(reducers);
export default store;
