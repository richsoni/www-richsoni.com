import {createSelector} from 'reselect';
import {sortObjMomentDESC} from '../../lib/sorting';

export const byID = (state) => state.releases.byID

export const sorted = createSelector(
  byID,
  (byID) => {
    return Object.values(byID).sort(sortObjMomentDESC('releasedOnMoment'))
  }
)
