import { createStore } from 'redux';
import { reducer1, studentReducer } from './reducers.js';
import { combineReducers } from 'redux';
const reducers = combineReducers({
    reducer1,
    studentReducer
})
const store = createStore(reducers);
export default store;
