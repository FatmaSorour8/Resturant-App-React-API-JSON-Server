import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // Example reducer

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
