import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import  settings from './Settings';
const reducers = combineReducers({
  router: routerReducer,
  settings
});

export default reducers;

