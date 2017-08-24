import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import baseReducer from "./base.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(baseReducer, composeEnhancers(
  applyMiddleware(apiMiddleware, thunk)
));

export default store;
