import React from 'react';
import moment from 'moment';
import {showNameLong} from '../../shared/presenters';
import Presenter from './presenter';
import momentify from '../../lib/momentify';

const upcomingShows = (shows = []) => {
  const now = moment.utc()
  return shows
    .filter((show) => momentify(show.date) > now)
    .sort((a, b) => {
      return momentify(a.date) - momentify(b.date)
    })
}

const pastShows = (shows = []) => {
  const now = moment.utc()
  return shows
    .filter((show) => momentify(show.date) < now)
    .sort((a, b) => {
      return momentify(b.date) - momentify(a.date)
    })
}

class Shows extends React.Component {
  render(){
    const loadedShows = this.props.shows
      .map((show) => {
        const location = this.props.locations[show.locationKey]
        return {
        ...show,
        location,
        locationString: `${location.address.locality}, ${location.address.region}`,
        dateString: momentify(show.date).format("MM/DD/YY"),
        moment: momentify(show.date),
        venueString: location.name,
      }})
    return <Presenter
      locations={this.props.locations}
      upcomingShows={upcomingShows(loadedShows)}
      pastShows={pastShows(loadedShows)}
    />
  }
}
module.exports = Shows;
