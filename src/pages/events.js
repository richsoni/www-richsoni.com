import React from "react";
import moment from 'moment';
import {eventNameLong, type} from '../utils/presenters';
import Presenter from '../components/EventIndex/';
import momentify from '../utils/momentify';
import { graphql } from "gatsby"

const upcomingEvents = (events = []) => {
  const now = moment.utc()
  return events
    .filter((event) => momentify(event.date) > now)
    .sort((a, b) => {
      return momentify(a.date) - momentify(b.date)
    })
}

const pastEvents = (events = []) => {
  const now = moment.utc()
  return events
    .filter((e) => momentify(e.date) < now)
    .sort((a, b) => {
      return momentify(b.date) - momentify(a.date)
    })
}

const parseEvents = (props) => {
  const locations = props.data.locations.edges.map((e) => e.node);
  const events =  props.data.events.edges.map((e) => {
    const event = e.node;
    const location = locations.find((l) => l.fields.basename === event.fields.notdate)
    return {
      location,
      locationString: `${location.address.locality}, ${location.address.region}`,
      typeString: type(event.frontmatter.type),
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

export default class EventIndex extends React.Component {
  render(){
    const loadedEvents = parseEvents(this.props);
    return <Presenter
      locations={this.props.locations}
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
