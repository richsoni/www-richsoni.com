"use strict"
const React           = require("react")
const Radium          = require("radium")
const HF              = require("../../shared/header-footer/")
const parseCollection = require("../../lib/parseCollection")
const releases        = require("../../data/releases")
const ajax            = require("../../lib/ajax")
const moment          = require('moment')

class _Album extends React.Component {
  render(){
    const size=200;
    return <div
        style={{
          width: size,
          textAlign: 'center',
          padding: '1em',
          backgroundColor: '#fff',
          boxShadow: '0px 0px 1px #797878',
          margin: '1em',
        }}
      >
      <a style={{
        width:size,
        height:size,
        border: '1px solid #bebebe',
        backgroundImage: `url(${this.props.image_url})`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
      href={this.props.url}
      >
      </a>
      <div
        style={{
          marginTop: '.2em',
        }}
      >
        {this.props.title}<br />
      </div>
    </div>
  }
}

_Album.defaultProps = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
}
const Album = Radium(_Album)

class _Song extends React.Component {
  render(){
    return <li style={{
        color: '#000',
        fontSize: '1.5em',
        padding: '.2em',
      }}>
        <a style={{
          color: '#000',
          ':hover': {
            color: '#000',
          }
          }}
          key={this.props.filePrefix}
          href={`./${this.props.filePrefix}.html`}>{this.props.attributes.title}</a>
    </li>
  }
}
const Song = Radium(_Song)

class Heading extends React.Component{
  render(){
    return <h1 style={{
      borderBottom: '1px solid #bebebe',
      color: '#e8e8e8',
    }}
    >{this.props.children}</h1>
  }
}

class RootComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      collection: [],
    }

    ajax.get('/songs/songs.json', (payload) => {
      this.setState(parseCollection(JSON.parse(payload), 'ASC'))
    })
  }

  render() {
    return <HF style={{
      backgroundColor: 'transparent',
    }}>
      <div style={{
        maxWidth: 960,
        margin: 'auto auto',
        padding: '1em',
      }}>
        <Heading>Albums</Heading>
        {this._renderCategory("studio")}
        <Heading>Safety Tapes</Heading>
        {this._renderCategory("safetytapes")}
        <Heading>Live Bootlegs</Heading>
        {this._renderCategory("live")}
      </div>
    </HF>
  }

  _renderCategory(category){
    const albums = releases
      .filter((release) => release.tags && release.tags.indexOf(category) > -1)
      .map((release) => {
        release.releaseDate = new moment(release.releaseDate)
        return release
      })
      .sort((a,b) => a.releaseDate < b.releaseDate )
      .map((release) => <Album {...release} />)
    return <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
      {albums}
    </div>
  }

  _renderSongs() {
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <ul style={{
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}>
      { this.state.collection.map((song) => <Song filePrefix={song[0]} key={song[0]} {...song[1]} /> )}
    </ul>
  }
}

module.exports = RootComponent
