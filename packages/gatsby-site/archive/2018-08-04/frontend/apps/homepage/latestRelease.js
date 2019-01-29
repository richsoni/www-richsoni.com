import React from 'react';
import Radium from 'radium';
import {Provide} from '../../shared/reduxProvider';
import {fetchAll as fetchAllReleases} from '../../data/releases/actions';
import {sorted as sortedReleases} from '../../data/releases/selectors';
import Half from "../../shared/half";

const getSpotifyURI = function(release){
  if(!release.links.spotify) { return null }
  return release.links.spotify.match(/[^\/]*$/)[0]
}

const rounded = {backgroundColor: '#000000', color:'#ffffff', padding: '1em', marginLeft: '1em', textAlign: 'center'}

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

const Bandcamp = (props) => {
  const {release} = props;
  if(!release.links.bandcamp) { return <div /> }
  return <a style={{color: '#fff', textDecoration:'none'}} href={release.links.bandcamp}><h2 style={rounded}><i className='fa fa-headphones' /> Purchase On Bandcamp!</h2></a>
}

const Itunes = (props) => {
  const {release} = props;
  if(!release.links.itunes) { return <div /> }
  return <a style={rounded} href={release.links.itunes}><i className='fa fa-apple' /> iTunes</a>
}

const Amazon = (props) => {
  const {release} = props;
  if(!release.links.amazon) { return <div /> }
  return <a style={rounded} href={release.links.amazon}><i className='fa fa-amazon' /> Amazon</a>
}

const SpotifyPlaylist = (props) => {
  const {release} = props;
  if(!release.links.spotify) { return <div /> }
  return <iframe src={`https://embed.spotify.com/?uri=spotify%3Aalbum%3A${getSpotifyURI(release)}`} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
}

class _Presenter extends React.Component{
  render(){
    const {release} = this.props;
    if(!release.id) { return <div /> }
    return <Half style={{
      backgroundImage: `url(${release.imageURL})`,
      backgroundPosition: 'bottom center',
      backgroundColor: '#12002F',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover'
    }}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <h1 style={{backgroundColor:'#ffffff',padding:2, textAlign: 'center', color: '#000000'}}>{release.title} Available Now!!!</h1>
          <br/>
          <Bandcamp release={release} />
          <br/>
          <div style={{marginTop: '1em', marginBottom: '1em', textAlign: 'center'}}>
            <Itunes release={release} />
            <Amazon release={release} />
          </div>
        </div>
        <div style={rightStyle}>
          <SpotifyPlaylist release={release} />
        </div>
      </div>
    </Half>
  }
}

const Presenter = Radium(_Presenter);

class Container extends React.Component {
  render(){
    return <Presenter {...this.props} />
  }

  componentDidMount() {
    if(this.props.componentDidMount){
      this.props.componentDidMount(this.props)
    }
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: (props) => {
      dispatch(fetchAllReleases())
    }
  }
}

const mapStateToProps = (state) => {
  const releases = sortedReleases(state)
  const release = releases[0] || {}
  return {
    release
  }
}


export default Provide({
  Component: Container,
  mapStateToProps,
  mapDispatchToProps
});
