import {combineReducers} from 'redux';
import locationsReducer from  './locations/reducer';
export default combineReducers({
  locations: locationsReducer,
})
