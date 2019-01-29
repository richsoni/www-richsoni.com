import moment from 'moment';

export default (date: any): any => {
  let format = 'YYYY-MM-DD HH:mm:ss Z';
  if(!date) { return null }
  if(date.match(/\d\d\d\d-\d\d-\d\d/)){
    format = 'YYYY-MM-DD';
  }
  const _moment = moment.utc(date, format)
  if(_moment.isValid()) { return _moment }
  return null
}

