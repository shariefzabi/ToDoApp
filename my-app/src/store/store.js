import { createStore } from 'redux';
import { reducer1, studentReducer,ToDoReducer } from './reducers.js';
import { combineReducers } from 'redux';
const reducers = combineReducers({
    reducer1,
    studentReducer,
    ToDoReducer
})
const store = createStore(reducers);
export default store;
