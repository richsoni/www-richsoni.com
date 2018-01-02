import moment from 'moment';
import momentify from '../lib/momentify';

export const MMDDYYYY = (date) => {
  if(!date) { return '' }
  return `${momentify(date).format("MMM. DD, YYYY")}`;
}

export const cityCommaState = (address) => {
  return `${address.locality}, ${address.region}`;
}

