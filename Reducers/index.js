import { combineReducers } from 'redux';
import coinStore from './coinReducer';

// Combine all the reducers
const rootReducer = combineReducers({
    coinStore
});

export default rootReducer