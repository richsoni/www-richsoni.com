"use strict"
const React           = require("react")
const HF              = require("../../shared/header-footer/")
const Disqus          = require("../../shared/disqus/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const KEY             = window.location.pathname.replace('/songs/','').replace('.html','')

class RootComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      collection: [],
    }

    ajax.get('/songs/songs.json', (payload) => {
      const songs = JSON.parse(payload)
      this.setState(parseCollection(songs, 'ASC'))
      this.setState({song: songs[KEY]})
    })
  }

  render() {
    return <HF>
      {this.renderSong()}
    </HF>
  }

  renderSong() {
    if( this.state.song ){
      return <div style={{
        textAlign: 'center',
      }}>
        <h1 style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}> {this.state.song.attributes.title} </h1>
        <div dangerouslySetInnerHTML={{__html: this.state.song.body}} />
        <hr />
        <h3>Comments</h3>
        <Disqus />
      </div>
    }
    return <div />
  }
}

module.exports = RootComponent
