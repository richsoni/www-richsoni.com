export const REQUEST = "SONGS_REQUEST";
export const FINISH  = "SONGS_FINISH";
export const ERROR  = "SONGS_ERROR";
export const HYDRATE_ONE = "SONG_HYDRATE_ONE";

const parse = (songs) => {
  return {
    length: Object.keys(songs).length,
    byID: Object.keys(songs).reduce((memo, key) => {
      const song = songs[key]
      return {...memo, [song.slug]: song}
    }, {}),
  }
}

export default (state = parse({}), action) => {
  switch(action.type) {
    case FINISH:
      return parse(action.payload)
    case HYDRATE_ONE:
      return parse({
        ...state.byID,
        [action.payload.slug]: action.payload,
      })
    default: return state;
  }
}

