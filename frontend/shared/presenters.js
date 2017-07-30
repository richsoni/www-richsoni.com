import moment from 'moment';
export const showNameLong = (show, _location) => {
  return `${moment.utc(show.date).format("MM/DD/YY")} ${_location.address.locality}, ${_location.address.region}`;
}
