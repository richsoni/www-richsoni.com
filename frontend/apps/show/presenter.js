import React from "react";
import HF from "../../shared/header-footer/";
import styles from './styles.module.css';
import LocationMap from '../../shared/LocationMap';
import {showNameLong} from '../../shared/presenters';
import Disqus from "../../shared/disqus/component";

class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  render() {
    return <div>
      <div className={styles.tabs}>
        {this.props.tabs.map((t, i) => {
          const className = this.state.activeTab === i ? styles.activeTab : styles.tab;
          return <div
            key={t.title}
            className={className}
            onClick={() => {this.setState({activeTab: i})}}
          >{t.title}</div>
        })}
      </div>
      <div>
        {this.props.tabs[this.state.activeTab].content()}
      </div>
    </div>
  }
}

export default class Presenter extends React.Component {
  render() {
    const {location} = this.props
    const show = this.props
    return <HF>
      <h1><a href="/shows">Shows</a> / {showNameLong(show, location)}</h1>
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
    if(this.props.setlist && this.props.setlist.length){
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
    const {setlist, songs} = this.props
    return <div>
      <h2>Setlist</h2>
      <ol>
        {
          setlist.map((sl) => {
            const song = songs.byID[sl]
            if(!song) { console.error(sl, " is not a song") }
            return <li key={song.slug}>{song.title}</li>
          })
        }
      </ol>
    </div>
  }
}
