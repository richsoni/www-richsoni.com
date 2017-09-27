import React from 'react';
import HF from '../../shared/header-footer/';
import Table from '../../ui/Table/';
import {sortASC, sortDESC} from '../../ui/Table/dateSort';

export default (props) => {
  return <HF>
    <h2>Upcoming Shows</h2>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
         sortASC,
         sortDESC,
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
       sortDefaultKey='dateString'
    />
    <h2>Past Shows</h2>
    <Table
       fields={[{
         title: 'Date',
         key: 'dateString',
         sortASC,
         sortDESC,
       }, {
         title: 'Venue',
         key: 'venueString',
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.pastShows}
       sortDefaultKey='dateString'
       sortDefaultDirection='DESC'
    />
  </HF>
}
