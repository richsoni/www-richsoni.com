"use strict"
const React           = require("react")
const SoundCloudPlaylist = require("../../shared/soundcloud/playlist")
const Radium          = require("radium")

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
  maxWidth: '1200px',
}

const leftStyle = {
  alignSelf: 'flex-start',
  padding: '1em',
}

const rightStyle = {
  alignSelf: 'flex-end',
  height: '40vh',
  width: '372px',
  textAlign: 'center',
}


class Dylcember extends React.Component{
  render(){
    const linkCol = '#64EAFF'
    return <div style={containerStyle}>
      <div style={leftStyle}>
        <h1 style={{
          fontSize: '3em',
          color:   '#4DF97C',
          marginBottom: '.2em',
        }}><i className='fa fa-tree'/> Dylcember</h1>
        <div style={{
          color: 'white',
          fontStyle: 'italic',
          fontSize: '1em'
        }}>
          Tis the month of December<br />
          and all through the town<br />
          Covers of Bob Dylan<br />
          are being passed all around
        </div>
        <div>
          <h2 style={{
            fontSize: '2em',
            color: '#333333',
            marginBottom: '-.2em'
          }}><i className='fa fa-gift'/> How To Participate</h2>
          <ol>
            <li>Upload Your Cover To <a style={{color: linkCol}} href='https://soundcloud.com/richsoni/sets/dylcember'>Soundcloud <i className='fa fa-soundcloud'></i></a></li>
            <li><a style={{color: linkCol}} href='https://twitter.com/search?src=typd&q=%23dylcember'><i className='fa fa-twitter' /> Tweet It </a>with <a href='https://twitter.com/search?src=typd&q=%23dylcember' style={{color: linkCol}}>#dylcember</a>, or <a style={{color: linkCol}} href='https://twitter.com/richsoni'>@richsoni</a></li>
            <li>Post It On <a href='http://reddit.com/r/bobdylan' style={{color:linkCol}}> The Bob Dylan Subreddit <i className='fa fa-reddit'/></a></li>
          </ol>
        </div>
      </div>
      <div style={rightStyle}>
        <SoundCloudPlaylist playlistId='172939613' />
      </div>
    </div>
  }
}

module.exports = Radium(Dylcember)
