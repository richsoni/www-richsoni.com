export const HYDRATE_ONE = "SONG_HYDRATE_ONE";

const parse = (locations) => {
  return {
    length: Object.keys(locations).length,
    byID: locations,
  }
}

export default (state = parse({}), action) => {
  switch(action.type) {
    case HYDRATE_ONE:
      return parse({
        ...state.byID,
        [action.payload.slug]: action.payload,
      })
    default: return state;
  }
}

