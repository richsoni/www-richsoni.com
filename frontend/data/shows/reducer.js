export const HYDRATE_ONE = "SHOW_HYDRATE_ONE";
export const REQUEST = "SHOWS_REQUEST";
export const FINISH = "SHOWS_FINISH";
export const ERROR = "SHOWS_ERROR";

const parse = (items) => {
  return {
    length: Object.keys(items).length,
    byID: Object.keys(items).reduce((memo, key) => {
      const item = items[key]
      return {...memo, [item.url]: item}
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

