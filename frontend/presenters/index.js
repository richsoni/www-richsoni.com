import moment from 'moment';

export const MMDDYYYY = (date) => {
  if(!date) { return '' }
  return `${moment.utc(date).format("MMM. DD, YYYY")}`;
}

export const cityCommaState = (address) => {
  return `${address.locality}, ${address.region}`;
}
