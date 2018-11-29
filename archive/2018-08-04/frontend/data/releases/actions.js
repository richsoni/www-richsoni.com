import {CALL_API} from 'redux-api-middleware';
import {
  REQUEST, FINISH, ERROR,
} from './reducer';

export const fetchAll = () => {
  return {
    [CALL_API]: {
      endpoint: '/api/releases.json',
      method: 'GET',
      types: [REQUEST, FINISH, ERROR]
    }
  }
}
