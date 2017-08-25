import {combineReducers} from 'redux';
import locationsReducer from  './locations/reducer';
import songsReducer from  './songs/reducer';

export default combineReducers({
  locations: locationsReducer,
  songs: songsReducer,
})
