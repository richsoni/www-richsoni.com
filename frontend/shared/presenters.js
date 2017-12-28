import moment from 'moment';
import momentify from '../lib/momentify';

export const showNameLong = (show, _location) => {
  return `${momentify(show.date).format("MMM. DD, YYYY")} / ${_location.address.locality}, ${_location.address.region}`;
}
