import moment from 'moment';

export default (date) => {
  if(!date) { return null }
  const _moment = moment.utc(date, 'YYYY-MM-DD HH:mm:ss Z')
  if(_moment.isValid()) { return _moment }
  return null
}
