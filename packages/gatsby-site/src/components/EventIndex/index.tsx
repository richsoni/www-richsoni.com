import React from 'react';
import {SORTDESC} from '../Table/';
import Table from '../Table/';
import {sortASC, sortDESC} from '../Table/dateSort';
import Content from '../Content/';
import {Breadcrumbs} from '../Breadcrumbs/';
import {Breadcrumb} from '../Breadcrumbs/';

export default (props: any) => {
  const upcomingEvents = props.upcomingEvents.length ? (
    <div>
      <p><i>Showing {props.upcomingEvents.length} events</i></p>
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
    </div>
  ) : (
    <div>
      <p><i>There are no upcoming events</i> 😓</p>
    </div>
  );
  return <Content>
    <Breadcrumbs>
      <Breadcrumb>Upcoming Events</Breadcrumb>
    </Breadcrumbs>
    {upcomingEvents}
    <div style={{marginTop: '2em'}} />
    <Breadcrumbs>
      <Breadcrumb>Past Events</Breadcrumb>
    </Breadcrumbs>
    <p><i>Showing {props.pastEvents.length} events</i></p>
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
