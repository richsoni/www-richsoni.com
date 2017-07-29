import React from 'react';
import moment from 'moment';
import {showNameLong} from '../../shared/presenters';
import Presenter from './presenter';

const showName = (show, _location) => {
  return `${moment(show.date).format("MM/DD/YY")} ${_location.name}, ${_location.address.locality}, ${_location.address.region}`;
}

const upcomingShows = (shows = []) => {
  const now = moment()
  return shows
    .filter((show) => moment(show.date) > now)
    .sort((a, b) => {
      return a.date > moment(b.date)
    })
}

const pastShows = (shows = []) => {
  const now = moment()
  return shows
    .filter((show) => moment(show.date) < now)
    .sort((a, b) => {
      return a.date < b.date
    })
}

class Shows extends React.Component {
  render(){
    console.log(this.props)
    const loadedShows = this.props.shows
      .map((show) => { return {...show, location: this.props.locations[show.locationKey]}})
      .map((show) => { return {...show, _title: showName(show, show.location)}})
    return <Presenter
      locations={this.props.locations}
      upcomingShows={upcomingShows(loadedShows)}
      pastShows={pastShows(loadedShows)}
    />
  }
}
module.exports = Shows;
