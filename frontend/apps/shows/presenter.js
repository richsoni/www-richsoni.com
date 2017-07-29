import React from 'react';
import HF from '../../shared/header-footer/';
import styles from './styles.module.css';

export default (props) => {
  return <HF>
    <h2>Upcoming Shows</h2>
    <ul>
      {props.upcomingShows.map((show) => {
        const _location = props.locations[show.locationKey];
        return <li key={show.url}>
          <a href={show.url}>{show._title}</a>
        </li>
      })}
    </ul>
    <h2>Past Shows</h2>
    <ul>
      {props.pastShows.map((show) => {
        const _location = props.locations[show.locationKey];
        return <li key={show.url}>
          <a href={show.url}>{show._title}</a>
        </li>
      })}
    </ul>
  </HF>
}
