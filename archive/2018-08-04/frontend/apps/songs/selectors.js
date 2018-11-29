import {createSelector} from 'reselect'
import momentify from '../../lib/momentify';
import values from 'object.values';

const songsByID = (state) => state.songs.byID;
const showsArray = (state) => {
  const shows = state.shows.byID || {};
  return Object.keys(shows).map((key) => shows[key]);
}

export const showsWithSong = (shows, song) => {
  return shows.filter((item) => {
    return item.setlist && item.setlist.includes(song)
  }, [])
}

export const songIndex = createSelector(
  songsByID,
  showsArray,
  (songsByID, showsArray) => {
    return values(songsByID)
      .map((song) => {
        const _moment = momentify(song.composed_at);
        const _artist = typeof song.artist === 'object' ? song.artist.sort().join(', ') : song.artist
        const _showsWithSong = showsWithSong(showsArray, song.slug)
        const _firstPerformance = _showsWithSong[0] ? momentify(_showsWithSong[0].date) : null;
        const _lastPerformance = _showsWithSong.length > 0 ? momentify(_showsWithSong[_showsWithSong.length - 1].date) : null;
        return {
          title: song.title,
          composedAt: _moment ? _moment.format("MM/DD/YY") : null,
          artist: _artist,
          isMine: !!_artist.match('Rich Soni'),
          moment: _moment,
          url: song.url,
          performanceCount: _showsWithSong.length,
          firstPerformanceMoment: _firstPerformance,
          firstPerformance: _firstPerformance ? _firstPerformance.format("MM/DD/YY") : null,
          lastPerformanceMoment: _lastPerformance,
          lastPerformance: _lastPerformance ? _lastPerformance.format("MM/DD/YY") : null,
        }
      })
  }
)
