import React from "react";
import HF from "../../shared/header-footer/";
import styles from './styles.module.css';
import LocationMap from '../../shared/LocationMap';
import {MMDDYYYY, cityCommaState} from '../../presenters/';
import Disqus from "../../shared/disqus/component";
import Tabs from '../../shared/tabs/';


export default class Presenter extends React.Component {
  render() {
    const {location, show} = this.props
    return <HF>
      <h1>
        <a href="/shows">Shows</a> / {MMDDYYYY(show.date)} / {cityCommaState(location.address)}
      </h1>
      <h2><a target='_blank' href={location.website}>{location.name}</a></h2>
      <Tabs tabs={this.tabs()} />
      <h3>Comments</h3>
      <Disqus />
    </HF>
  }

  tabs() {
    let tabs = [{
      content: this.map.bind(this),
      title: "Map",
    }];
    if(this.props.show.setlist && this.props.show.setlist.length){
      tabs = tabs.concat([{
        content: this.setlist.bind(this),
        title: "Setlist",
      }]);
    }
    return tabs
  }

  map() {
    const {location} = this.props
    return <LocationMap {...location} />
  }

  setlist() {
    const {
      show,
      songs
    } = this.props
    return <div>
      <h2>Setlist</h2>
      <ol>
        {
          show.setlist.map((sl) => {
            const song = songs.byID[sl]
            if(!song) { console.error(sl, " is not a song") }
            return <li key={song.slug}>{song.title}</li>
          })
        }
      </ol>
    </div>
  }
}
