const React           = require("react")
const Radium          = require("radium")
const releases        = require("../../data/releases")
const release = releases.filter(function(release){
  return release.id === 'rs00005'
})[0]

const getLink = function(service){
  return release.links.filter(function(link){
    return link.service === service;
  })[0]
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
  maxWidth: '1200px',
  overflow: 'hidden',
}

const leftStyle = {
  alignSelf: 'flex-start',
  padding: '1em',
}

const rightStyle = {
  alignSelf: 'flex-end',
  width: '372px',
  textAlign: 'center',
}

class SafetyTapesVol1 extends React.Component{
  render(){
    const rounded = {backgroundColor: '#000000', color:'#ffffff', padding: '1em', marginLeft: '1em'}
    return <div style={containerStyle}>
      <div style={leftStyle}>
        <h1 style={{backgroundColor:'#ffffff',padding:2, textAlign: 'center', color: '#000000'}}>Angels' Share Available Now!!!</h1>
        <br/>
        <h2 style={rounded}><a style={{color: '#fff', textDecoration:'none'}} href={getLink('Bandcamp').href}><i className='fa fa-headphones' /> Purchase On Bandcamp!</a></h2>
        <br/>
        <div style={{marginTop: '1em', marginBottom: '1em', textAlign: 'center'}}>
          <a style={rounded} href={getLink('iTunes').href}><i className='fa fa-apple' /> iTunes</a>
          <a style={rounded} href={getLink('Amazon').href}><i className='fa fa-amazon' /> Amazon</a>
        </div>
      </div>
      <div style={rightStyle}>
        <iframe src={`https://embed.spotify.com/?uri=spotify%3Aalbum%3A${getLink('Spotify').albumId}`} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
      </div>
    </div>
  }
}

module.exports = Radium(SafetyTapesVol1)
