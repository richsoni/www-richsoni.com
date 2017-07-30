"use strict"
const React  = require("react")
const HF = require("../../shared/header-footer/")
const Disqus = require("../../shared/disqus/component")
const ajax   = require("../../lib/ajax")
import styles from './styles.module.css';
import {showNameLong} from '../../shared/presenters';

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
    return <HF>
      {this.renderShow()}
    </HF>
  }

  renderShow() {
    if( this.state.songs && this.state.locations ){
      const _location = this.state.locations[this.props.locationKey];
      console.log(this.props, this.state)
      return <div>
          <h1>{showNameLong(this.props, _location)}</h1>
          <h2>{_location.name}</h2>
        <hr />
        {this.setlist()}
        <h3>Comments</h3>
        <Disqus />
      </div>
    }
    return <div />
  }

  setlist() {
    if(this.props.setlist && this.props.setlist.length){
      return <div>
        <h2>Setlist</h2>
        <ol>
          {
            this.props.setlist.map((sl) => {
              const song = this.state.songs[sl]
              if(!song) { console.error(sl, " is not a song") }
              return <li key={song.slug}>{song.title}</li>
            })
          }
        </ol>
      </div>
    } else {
      return <div />
    }
  }
}

module.exports = RootComponent
