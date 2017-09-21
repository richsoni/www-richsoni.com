import moment from 'moment';

export default (date) => {
  if(!date) { return null }
  const _moment = moment.utc(date)
  if(_moment.isValid()) { return _moment }
  return null
}
