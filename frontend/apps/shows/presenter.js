import React from 'react';
import HF from '../../shared/header-footer/';
import styles from './styles.module.css';

const Table = (props) => {
  const {fields, items} = props
  const titles = fields.map((f) => f.title)
  const keys = fields.map((f) => f.key)
  return <table className={styles.table}>
    <thead>
      <tr>{titles.map((t) => <th>{t}</th>)}</tr>
    </thead>
    <tbody>
      {items.map((i) => <tr onClick={() => window.location = i.url}>
          {keys.map((k) => <td>{i[k]}</td>)}
        </tr>
      )}
    </tbody>
  </table>
}

export default (props) => {
  const fields =[{
    title: 'Date',
    key: 'dateString',
  }, {
    title: 'Venue',
    key: 'venueString',
  }, {
    title: 'Location',
    key: 'locationString',
  }];

  return <HF>
    <h2>Upcoming Shows</h2>
    <Table
       fields={fields}
       items={props.upcomingShows}
    />
    <h2>Past Shows</h2>
    <Table
       fields={fields}
       items={props.pastShows}
    />
  </HF>
}
