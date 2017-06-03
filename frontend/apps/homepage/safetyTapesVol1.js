const React           = require("react")
const Radium          = require("radium")

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
        <h1 style={{color: '#004AFF'}}>Safety Tapes Vol. 1 Available Now</h1>
        <br/>
        <h2 style={rounded}><a style={{color: '#fff', textDecoration:'none'}} href='https://richsoni.bandcamp.com/releases'><i className='fa fa-headphones' /> Purchase On Bandcamp!</a></h2>
        <br/>
        <div style={{marginTop: '1em', marginBottom: '1em', textAlign: 'center'}}>
          <a style={rounded} href="https://geo.itunes.apple.com/us/album/safety-tapes-vol.-1/id1064373884?mt=1&app=music"><i className='fa fa-apple' /> iTunes</a>
          <a style={rounded} href='http://www.amazon.com/gp/product/B018VUMEE0/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B018VUMEE0&linkCode=as2&tag=richsonicom-20&linkId=EZMGLDPQNAWR7FLC'><i className='fa fa-amazon' /> Amazon</a>
        </div>
      </div>
      <div style={rightStyle}>
        <iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A4kDyNXEDBQ5supyibyBlEU" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
      </div>
    </div>
  }
}

module.exports = Radium(SafetyTapesVol1)
