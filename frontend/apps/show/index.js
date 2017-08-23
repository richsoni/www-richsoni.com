"use strict"
import React  from "react";
import ajax   from "../../lib/ajax";
import Presenter from "./presenter";

class RootComponent extends React.Component{
  constructor() {
    super()
    this.state = { songs: null, locations: null }
    ajax.get('/api/locations.json', ((payload) => {
      const locations = JSON.parse(payload)
      this.setState({locations})
    }).bind(this));
    ajax.get('/api/songs.json', ((payload) => {
      const songs = JSON
        .parse(payload)
        .reduce((memo, item) => {
          return {...memo, [item.slug]: item}
        }, {})
      this.setState({songs})
    }).bind(this));
  }

  render() {
    if( this.state.songs && this.state.locations ){
      const _location = this.state.locations[this.props.locationKey];
      return <Presenter
        location={_location}
        songs={this.state.songs}
        setlist={this.props.setlist}
      />
    }
    return <div />
  }
}

module.exports = RootComponent
