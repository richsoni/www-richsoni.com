import {HYDRATE_ONE} from './reducer';
export const hydrateShow = (show) => {
  return {
    type: HYDRATE_ONE,
    payload: show,
  }
}
