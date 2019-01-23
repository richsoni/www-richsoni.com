import React from "react";
import moment from 'moment';
import Presenter from '../components/EventIndex/';
import momentify from '../utils/momentify';
import { graphql } from "gatsby"
import {Events} from '../data/events';
import {Locations, LocationNode} from '../data/locations.d';

type ParsedEvent = {
  location: LocationNode,
  locationString: string,
  typeString: string,
  dateString: string,
  moment: object,
  startTime: string,
  url: string,
  venueString: string,
  date?: string,
}

const upcomingEvents = (events: ParsedEvent[] = []) => {
  const now = moment.utc()
  return events
    .filter((event) => momentify(event.date) > now)
    .sort((a, b) => {
      return momentify(a.date) - momentify(b.date)
    })
}

const pastEvents = (events: ParsedEvent[] = []) => {
  const now = moment.utc()
  return events
    .filter((e) => momentify(e.date) < now)
    .sort((a, b) => {
      return momentify(b.date) - momentify(a.date)
    })
}

type EventProps = {
  data: {
    locations: Locations,
    events: Events,
  }
}

const parseEvents = (props: EventProps) => {
  const locations = props.data.locations.edges.map((e) => e.node);
  const events =  props.data.events.edges.map((e) => {
    const event = e.node;
    const location = locations.find((l) => l.fields.basename === event.fields.notdate) as LocationNode
    return {
      location,
      locationString: `${location.address.locality}, ${location.address.region}`,
      typeString: event.frontmatter.type,
      date: event.fields.date,
      dateString: momentify(event.fields.date).format("MM/DD/YY"),
      moment: momentify(event.fields.date),
      startTime: event.frontmatter.startTime,
      url: event.fields.url,
      venueString: location.name,
    }
  });
  return events;
}

export default class EventIndex extends React.Component<EventProps, {}> {
  render(){
    const loadedEvents = parseEvents(this.props);
    return <Presenter
      locations={this.props.data.locations}
      upcomingEvents={upcomingEvents(loadedEvents)}
      pastEvents={pastEvents(loadedEvents)}
    />
  }
}

export const query = graphql`
  query {
    events: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "events"}  }}
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            type
            artists
            startTime
          }
          fields {
            url
            date(formatString: "YYYY-MM-DD")
            notdate
          }
          excerpt
        }
      }
    }

    locations: allLocationsYaml {
    edges {
      node {
        fields {
          basename
          url
        }
        name
        address {
          country
          locality
          region
        }
      }
    }
  }
}
`
