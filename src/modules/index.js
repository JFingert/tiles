import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tileReducer from './tileReducer';

export default combineReducers({
  routing: routerReducer,
  tileReducer
});