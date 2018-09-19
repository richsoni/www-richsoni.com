import {CALL_API} from 'redux-api-middleware';
import {
  REQUEST, FINISH, ERROR,
  HYDRATE_ONE,
} from './reducer';

export const fetchAll = () => {
  return {
    [CALL_API]: {
      endpoint: '/api/songs.json',
      method: 'GET',
      types: [REQUEST, FINISH, ERROR]
    }
  }
}


export const hydrateOne = (song) => {
  return {
    type: HYDRATE_ONE,
    payload: song,
  }
}
