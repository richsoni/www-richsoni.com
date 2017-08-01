import React from 'react';
import HF from '../../shared/header-footer/';
import styles from './styles.module.css';

const Table = (props) => {
  const {fields, items} = props
  const titles = fields.map((f) => f.title)
  const keys = fields.map((f) => f.key)
  return <div className={styles.table}>
    <header>
      {titles.map((t) => <span>{t}</span>)}
    </header>
    {items.map((i) => <a href={i.url}>
        {keys.map((k) => <span>{i[k]}</span>)}
      </a>
    )}
  </div>
}

export default (props) => {
  return <HF>
    <h2>Upcoming Shows</h2>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
       }, {
         title: 'Start',
         key: 'startTime',
       }, {
         title: 'Venue',
         key: 'venueString',
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.upcomingShows}
    />
    <h2>Past Shows</h2>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
       }, {
         title: 'Venue',
         key: 'venueString',
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.pastShows}
    />
  </HF>
}
