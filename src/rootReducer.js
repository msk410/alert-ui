import { combineReducers } from 'redux';
import { showContentReducer } from './reducers';

const rootReducer = combineReducers({
  showContentReducer,
});

export default rootReducer;
