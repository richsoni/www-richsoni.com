import React from 'react';
import {showNameLong} from '../../shared/presenters';
const HF = require("../../shared/header-footer/")
const styles = require('./styles.module.css');
class Shows extends React.Component {
  render(){
    console.log(this.props)
    return <HF>
      <ul>
        {this.props.shows.map((show) => {
          console.log(show)
          const _location = this.props.locations[show.locationKey];
          return <li >
            <a href={show.url}>{showNameLong(show, _location)}</a>
          </li>
        })}
      </ul>
    </HF>
  }
}
module.exports = Shows;
