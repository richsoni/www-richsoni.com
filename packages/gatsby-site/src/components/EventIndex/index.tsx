import React from 'react';
import Content from '../Content/';
import {Breadcrumbs} from '../Breadcrumbs/';
import {Breadcrumb} from '../Breadcrumbs/';
import LinkTable from '@richsoni/components-link-table';

const eventToTableItem = (event: any) => {
  return {
    _id: JSON.stringify(event),
    'Date': event.dateString,
    'Venue': event.venueString,
    'Type': event.typeString,
    'Start': event.startTime,
    'Location': event.locationString,
    'href': event.url,
  }
}

export default (props: any) => {
  const upcomingEvents = props.upcomingEvents.length ? (
    <div>
      <p><i>Showing {props.upcomingEvents.length} events</i></p>
      <LinkTable
        attributes={['Date', 'Start', 'Venue', 'Type', 'Location']}
        sortBy='Date'
        sortDir='asc'
        items={props.upcomingEvents.map(eventToTableItem)}
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
    <LinkTable
      attributes={['Date', 'Venue', 'Type', 'Location']}
      sortBy='Date'
      sortDir='desc'
      items={props.pastEvents.map(eventToTableItem)}
    />
  </Content>
}
