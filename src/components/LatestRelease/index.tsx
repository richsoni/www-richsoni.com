import React from 'react';

const styles = require('./styles.module.css');
import Half from "../Half/";

const getSpotifyURI = function(release: any){
  if(!release.frontmatter.links.spotify) { return null }
  return release.frontmatter.links.spotify.match(/[^\/]*$/)[0]
}

const Bandcamp = (props: any) => {
  const {release} = props;
  if(!release.frontmatter.links.bandcamp) { return <div /> }
  return <a style={{color: '#fff', textDecoration:'none'}} href={release.frontmatter.links.bandcamp}><h2 className={styles.rounded}><i className='fa fa-headphones' /> Purchase On Bandcamp!</h2></a>
}

const Itunes = (props: any) => {
  const {release} = props;
  if(!release.frontmatter.links.itunes) { return <div /> }
  return <a className={styles.rounded} href={release.frontmatter.links.itunes}><i className='fa fa-apple' /> iTunes</a>
}

const Amazon = (props: any) => {
  const {release} = props;
  if(!release.frontmatter.links.amazon) { return <div /> }
  return <a className={styles.rounded} href={release.frontmatter.links.amazon}><i className='fa fa-amazon' /> Amazon</a>
}

const SpotifyPlaylist = (props: any) => {
  const {release} = props;
  if(!release.frontmatter.links.spotify) { return <div /> }
  return <iframe src={`https://embed.spotify.com/?uri=spotify%3Aalbum%3A${getSpotifyURI(release)}`} width="300" height="380" frameBorder="0"></iframe>
}

type Edge = {
  node: any
}

type Data = {
  edges: Array<Edge>,
}

type Props = {
  data: Data,
}

type State = {

}

export default class LatestRelease extends React.Component<Props, State> {
  render(){
    const albums = this.props.data.edges.map((e: Edge) => e.node);
    const release = albums.filter((a: any) => a.frontmatter.release_type != 'live-archive')[0];
    if(!release.id) { return <div /> }
    return <Half style={{
      backgroundImage: `url('/images/releases/${release.fields.basename}.png')`,
      backgroundPosition: 'bottom center',
      backgroundColor: '#12002F',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover'
    }}>
      <div className={styles.containerStyle}>
        <div className={styles.leftStyle}>
          <h1 style={{backgroundColor:'#ffffff',padding:2, textAlign: 'center', color: '#000000'}}>{release.title} Available Now!!!</h1>
          <br/>
          <Bandcamp release={release} />
          <br/>
          <div style={{marginTop: '1em', marginBottom: '1em', textAlign: 'center'}}>
            <Itunes release={release} />
            <Amazon release={release} />
          </div>
        </div>
        <div className={styles.rightStyle}>
          <SpotifyPlaylist release={release} />
        </div>
      </div>
    </Half>
  }
}
