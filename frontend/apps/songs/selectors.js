import {createSelector} from 'reselect'
import momentify from '../../lib/momentify';

const songsByID = (state) => state.songs.byID;

export const songIndex = createSelector(
  songsByID,
  (songsByID) => {
    return Object
      .values(songsByID)
      .map((song) => {
        const _moment = momentify(song.composed_at);
        const _artist = typeof song.artist === 'object' ? song.artist.sort().join(', ') : song.artist
        return {
          title: song.title,
          composedAt: _moment ? _moment.format("MM/DD/YY") : null,
          artist: _artist,
          isMine: !!_artist.match('Rich Soni'),
          moment: _moment,
          url: song.url,
        }
      })
  }
)
