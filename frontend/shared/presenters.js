export const showNameLong = (show, _location) => {
  return `${moment(show.date).format("MM/DD/YY")} ${_location.address.locality}, ${_location.address.region}`;
}
