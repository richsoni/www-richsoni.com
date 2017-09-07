import {createSelector} from 'reselect'

const songsByID = (state) => state.songs.byID;

const momentify = (date) => {
  if(!date) { return null }
  const _moment = moment.utc(date)
  if(_moment.isValid()) { return _moment }
  return null
}

export const songIndex = createSelector(
  songsByID,
  (songsByID) => {
    return Object
      .values(songsByID)
      .map((song) => {
        const _moment = momentify(song.composed_at);
        return {
          title: song.title,
          composedAt: _moment ? _moment.format("MM/DD/YY") : null,
          moment: _moment,
          url: song.url,
        }
      })
  }
)
