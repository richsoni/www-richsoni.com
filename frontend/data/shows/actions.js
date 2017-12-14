import {CALL_API} from 'redux-api-middleware';
import {
  REQUEST, FINISH, ERROR,
} from './reducer';
import {HYDRATE_ONE} from './reducer';

export const hydrateShow = (show) => {
  return {
    type: HYDRATE_ONE,
    payload: show,
  }
}

export const fetchAll = () => {
  return {
    [CALL_API]: {
      endpoint: '/api/shows.json',
      method: 'GET',
      types: [REQUEST, FINISH, ERROR]
    }
  }
}
