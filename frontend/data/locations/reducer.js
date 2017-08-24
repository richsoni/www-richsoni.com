export const REQUEST = "LOCATIONS_REQUEST";
export const FINISH  = "LOCATIONS_FINISH";
export const ERROR  = "LOCATIONS_ERROR";

export default (state = {}, action) => {
  switch(action.payload) {
    case FINISH:
      return action.payload
    default: return state;
  }
}

