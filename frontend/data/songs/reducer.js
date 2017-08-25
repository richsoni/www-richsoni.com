export const REQUEST = "SONGS_REQUEST";
export const FINISH  = "SONGS_FINISH";
export const ERROR  = "SONGS_ERROR";

const parse = (songs) => {
  return {
    length: Object.keys(songs).length,
    byID: songs.reduce((memo, item) => {
      return {...memo, [item.slug]: item}
    }, {}),
  }
}

export default (state = parse([]), action) => {
  switch(action.type) {
    case FINISH:
      return parse(action.payload)
    default: return state;
  }
}

