import moment from 'moment';
import momentify from '../lib/momentify';

export const showNameLong = (show, _location) => {
  return `${momentify(show.date).format("MMM. DD, YYYY")} / ${_location.address.locality}, ${_location.address.region}`;
}

export const type = (type) => {
  switch(type){
    case 'open-mic-host': return 'Open Mic (Host)';
    case 'open-mic': return "Open Mic";
    case 'writers-in-the-round': return "Writers In The Round";
    case 'support': return "Supporting Act";
    default: return 'Headliner';
  }
}
