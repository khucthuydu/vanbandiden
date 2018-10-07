// Redux Store Configuration
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import createLogger from 'redux-logger'; 
import appStateMiddleware from './middleware/appState';
import { getUser } from 'utils/localStorage'

let initialState = {
  login: {id: getUser()}
};

let middleware;
if (process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk, createLogger, appStateMiddleware));
} else {
  middleware = applyMiddleware(thunk, appStateMiddleware);
}

let configureStore =  createStore(rootReducer, initialState, middleware);

export default configureStore;
