import {combineReducers} from 'redux';
import locationsReducer from  './locations/reducer';
import songsReducer from  './songs/reducer';
import showsReducer from  './shows/reducer';
import releasesReducer from  './releases/reducer';

export default combineReducers({
  locations: locationsReducer,
  songs: songsReducer,
  shows: showsReducer,
  releases: releasesReducer,
})
