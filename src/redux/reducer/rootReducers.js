// ** Redux Imports
import { combineReducers } from 'redux';

// import Reducers
import pokesReducer from './list';

const appReducer = combineReducers({
  pokes: pokesReducer,
});

export default appReducer;
