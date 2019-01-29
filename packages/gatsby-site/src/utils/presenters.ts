import momentify from './momentify';

export const eventNameLong = (event: any, _location: any) => {
  return `${momentify(event.date).format("MMM. DD, YYYY")} / ${_location.address.locality}, ${_location.address.region}`;
}

export const type = (type: any) => {
  switch(type){
    case 'open-mic-host': return 'Open Mic (Host)';
    case 'open-mic': return "Open Mic";
    case 'writers-in-the-round': return "Writers In The Round";
    case 'support': return "Supporting Act";
    default: return 'Headliner';
  }
}
export const MMDDYYYY = (date: any) => {
  if(!date) { return '' }
  return `${momentify(date).format("MMM. DD, YYYY")}`;
}

export const cityCommaState = (address: any) => {
  return `${address.locality}, ${address.region}`;
}

