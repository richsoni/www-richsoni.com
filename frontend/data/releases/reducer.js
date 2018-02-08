export const REQUEST = "RELEASES_REQUEST";
export const FINISH  = "RELEASES_FINISH";
export const ERROR  = "RELEASES_ERROR";
import momentify from '../../lib/momentify';

const parse = (releases={}) => {
  return {
    byID: Object.keys(releases).reduce((memo, key) => {
      const release = releases[key]
      const links = release.links || {}
      return {...memo, [release.slug]: {
        ...release,
        releasedOnMoment: momentify(release.released_on),
        links,
        imageURL: `/images/releases/${release.slug}.png`,
      }}
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
