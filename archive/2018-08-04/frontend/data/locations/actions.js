import {CALL_API} from 'redux-api-middleware';
import {
  REQUEST, FINISH, ERROR
} from './reducer';

export const fetchAllLocations = () => {
  return {
    [CALL_API]: {
      endpoint: '/api/locations.json',
      method: 'GET',
      types: [REQUEST, FINISH, ERROR]
    }
  }
}
