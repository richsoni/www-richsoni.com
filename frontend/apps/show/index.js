"use strict"
const React  = require("react")
const moment = window.moment = require("moment")
const HF = require("../../shared/header-footer/")
const Disqus = require("../../shared/disqus/component")
const ajax   = require("../../lib/ajax")

class RootComponent extends React.Component{
  constructor() {
    super()
    this.state = { songs: null, locations: null }
    ajax.get('/api/locations.json', (payload) => {
      const locations = JSON.parse(payload)
      this.setState({locations})
    }.bind(this));
    ajax.get('/api/songs.json', (payload) => {
      const songs = JSON
        .parse(payload)
        .reduce((memo, item) => {
          return {...memo, [item.slug]: item}
        }, {})
      this.setState({songs})
    }.bind(this));
  }

  render() {
    return <HF>
      {this.renderShow()}
    </HF>
  }

  renderShow() {
    if( this.state.songs && this.state.locations ){
      const _location = this.state.locations[this.props.locationKey];
      console.log(this.props, this.state)
      return <div style={{
        textAlign: 'center',
      }}>
        <h1 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        </h1>
          <p>{moment(this.props.date).format("MMMM DD, YYYY")}</p>
          <p>{_location.name}</p>
        <hr />
        <h2>Setlist</h2>
        {
          this.props.setlist.map((sl) => {
            const song = this.state.songs[sl]
            if(!song) { console.error(sl, " is not a song") }
            return <div key={song.slug}>{song.title}</div>
          })
        }
        <h3>Comments</h3>
        <Disqus />
      </div>
    }
    return <div />
  }
}

module.exports = RootComponent
