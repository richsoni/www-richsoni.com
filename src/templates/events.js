import React from "react";
import style from './style.css';
import styleMod from './style.module.css';
import moment from "moment";
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import {MMDDYYYY, cityCommaState} from '../utils/presenters';
import {nodesByBasename} from '../utils/data';
import Tabs from '../components/Tabs/';
import LocationMap from '../components/LocationMap';

export default class EventsTemplate extends React.Component {

  render() {
    const {event, locations} = this.props.data;
    const location = this.location();
    return (
      <Content>
        <Breadcrumbs>
          <Breadcrumb href='/events'>Events</Breadcrumb>
          <Breadcrumb>{event.fields.date}</Breadcrumb>
          <Breadcrumb>{location.name}</Breadcrumb>
        </Breadcrumbs>
        <h2><a target='_blank' href={location.website}>{location.name}</a></h2>
        <Tabs tabs={this.tabs()} />
      </Content>
    );
  }

  location() {
    const {event, locations} = this.props.data
    const locationsByBasename = nodesByBasename(locations);
    return locationsByBasename[event.fields.notdate];
  }

  tabs() {
    const {event} = this.props.data;
    let tabs = [{
      content: this.map.bind(this),
      title: "Map",
    }];
    const setlist = event.frontmatter.setlist
    if(setlist && setlist.length){
      tabs = tabs.concat([{
        content: this.setlist.bind(this),
        title: "Setlist",
      }]);
    }
    return tabs
  }

  map() {
    const location = this.location()
    return <LocationMap {...location} />
  }

  setlist() {
    const {
      event,
      songs,
    } = this.props.data;
    const songsByBasename = nodesByBasename(songs)
    return <div>
      <h2>Setlist</h2>
      <ol>
        {
          event.frontmatter.setlist.map((sl) => {
            const song = songsByBasename[sl]
            if(!song) { console.error(sl, " is not a song") }
            return <li key={song.fields.basename}><a href={song.fields.url}>{song.frontmatter.title}</a></li>
          })
        }
      </ol>
    </div>
  }
}

export const query = graphql`
  query EventQuery($url: String!) {
    event: markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        setlist
      }
      fields {
        date
        notdate
      }
    }

    songs: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "songs"}  }}
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              url
              basename
            }
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
          website
          address {
            country
            locality
            region
          }
        }
      }
    }
  }
`;
