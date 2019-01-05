import React from 'react';
import {SORTDESC} from '../Table/';
import Table from '../Table/';
import {sortASC, sortDESC} from '../Table/dateSort';
import Content from '../content/';
import {Breadcrumbs} from '../Breadcrumbs/';
import {Breadcrumb} from '../Breadcrumbs/';

export default (props: any) => {
  return <Content>
    <Breadcrumbs>
      <Breadcrumb>Upcoming Events</Breadcrumb>
    </Breadcrumbs>
    <i>Showing {props.upcomingEvents.length} events</i>
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
         title: 'Type',
         key: 'typeString',
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.upcomingEvents}
       sortDefaultKey='dateString'
    />
    <div style={{marginTop: '2em'}} />
    <Breadcrumbs>
      <Breadcrumb>Past Events</Breadcrumb>
    </Breadcrumbs>
    <i>Showing {props.pastEvents.length} events</i>
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
         title: 'Type',
         key: 'typeString',
       }, {
         title: 'Location',
         key: 'locationString',
       }]}
       items={props.pastEvents}
       sortDefaultKey='dateString'
       sortDefaultDirection={SORTDESC}
    />
  </Content>
}
