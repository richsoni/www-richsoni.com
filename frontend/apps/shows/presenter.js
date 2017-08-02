import React from 'react';
import HF from '../../shared/header-footer/';
import Table from '../../ui/Table/';

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
