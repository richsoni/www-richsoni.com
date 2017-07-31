import React from 'react';
import moment from 'moment';
import {showNameLong} from '../../shared/presenters';
import Presenter from './presenter';

const showName = (show, _location) => {
  return `${moment.utc(show.date).format("MM/DD/YY")} ${_location.name}, ${_location.address.locality}, ${_location.address.region}`;
}

const upcomingShows = (shows = []) => {
  const now = moment.utc()
  return shows
    .filter((show) => moment.utc(show.date) > now)
    .sort((a, b) => {
      return moment.utc(a.date) - moment.utc(b.date)
    })
}

const pastShows = (shows = []) => {
  const now = moment.utc()
  return shows
    .filter((show) => moment.utc(show.date) < now)
    .sort((a, b) => {
      return moment.utc(b.date) - moment.utc(a.date)
    })
}

class Shows extends React.Component {
  render(){
    console.log(this.props)
    const loadedShows = this.props.shows
      .map((show) => {
        const location = this.props.locations[show.locationKey]
        return {
        ...show,
        location,
        locationString: `${location.address.locality} ${location.address.region}`,
        dateString: moment.utc(show.date).format("MM/DD/YY"),
        venueString: location.name,
      }})
      .map((show) => { return {...show, _title: showName(show, show.location)}})
    return <Presenter
      locations={this.props.locations}
      upcomingShows={upcomingShows(loadedShows)}
      pastShows={pastShows(loadedShows)}
    />
  }
}
module.exports = Shows;
