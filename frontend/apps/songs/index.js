import React from 'react';
import moment from 'moment';
import Presenter from './presenter';

class Shows extends React.Component {
  render(){
    console.log(this.props)
    const songs = this.props.songs
      .map((song) => {
        return {
        ...song,
        composedAt: moment.utc(song.composed_at).format("MM/DD/YY"),
      }})
    return <Presenter
      songs={songs}
    />
  }
}
module.exports = Shows;
