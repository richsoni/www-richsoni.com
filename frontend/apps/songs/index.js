import React from 'react';
import moment from 'moment';
import Presenter from './presenter';

class Songs extends React.Component {
  render(){
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
module.exports = Songs;
