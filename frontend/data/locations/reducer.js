export const REQUEST = "LOCATIONS_REQUEST";
export const FINISH  = "LOCATIONS_FINISH";
export const ERROR  = "LOCATIONS_ERROR";

const parse = (locations) => {
  return {
    length: Object.keys(locations).length,
    byID: locations,
  }
}

export default (state = parse({}), action) => {
  switch(action.type) {
    case FINISH:
      return parse(action.payload)
    default: return state;
  }
}

