import React from "react";
import moment from 'moment';
import HF from "../../shared/header-footer/";
import {MMDDYYYY} from '../../presenters/';
import Disqus from "../../shared/disqus/component";
import styles from './styles.module.css';

const Track = (props) => {
  const {
    url,
    title
  } = props;
  return <li><a href={url}>{title}</a></li>
}

const Tracklist = (props) => {
  const {tracks} = props;
  return <ol className='tracklist'>
    {tracks.map((track) => <Track key={track.slug} {...track} />)}
  </ol>
}

export default class Presenter extends React.Component {
  render() {
    const {release, tracks} = this.props
    const {slug} = release;
    return <HF>
      <h1>
        <a href="/albums">Albums</a> / {release.title}
      </h1>
      <h2 className={styles.releasedOn}>Released on {MMDDYYYY(release.realeased_on)}</h2>
      <div className={styles.artwork} style={{backgroundImage: `url(/images/releases/${slug}.png)`}} />
      <Tracklist tracks={tracks} />
      <h3>Comments</h3>
      <Disqus />
    </HF>
  }

}
