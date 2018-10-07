import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import  settings from './Settings';
import  login from './login';
const reducers = combineReducers({
  router: routerReducer,
  settings,
  login
});

export default reducers;

