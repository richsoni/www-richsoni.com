export const REQUEST = "RELEASES_REQUEST";
export const FINISH  = "RELEASES_FINISH";
export const ERROR  = "RELEASES_ERROR";

const parse = (releases={}) => {
  console.log(releases)
  return {
    byID: Object.keys(releases).reduce((memo, key) => {
      const release = releases[key]
      return {...memo, [release.slug]: release}
    }, {}),
  }
}

export default (state = parse(), action) => {
  switch(action.type) {
    case FINISH:
      return parse(action.payload)
    default: return state;
  }
}
