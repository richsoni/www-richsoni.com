import React from "react";
import style from './style.css';
import moment from "moment";
import {eventsWithSong} from '../utils/data';
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import { graphql } from "gatsby"

export default ({ data }) => {
  const song = data.song;
  const date = new moment(song.fields.composedAt).format('MM/DD/YYYY')
  const _eventsWithSong = eventsWithSong(data.events, song.fields.basename);
  const performedLive = eventsWithSong.length > 0 ? `Performed Live: ${_eventsWithSong.length} ${_eventsWithSong.length === 1 ? 'time' : 'times'}` : ''
  return (
    <Content>
      <Breadcrumbs>
        <Breadcrumb href="/songs">Songs</Breadcrumb>
        <Breadcrumb>{song.frontmatter.title}</Breadcrumb>
      </Breadcrumbs>
      {performedLive}
      <div style={{marginTop: '2em'}} dangerouslySetInnerHTML={{__html: song.html}} />
      <h3>Comments</h3>
    </Content>
  )
};

export const query = graphql`
  query ($url: String!) {
    song: markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
      }
      fields {
        date
        basename
      }
    }

    events: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "events"}  }}
    ) {
      edges {
        node {
          id
          fields {
            date(formatString: "YYYY-MM-DD")
          }
          frontmatter {
            setlist
          }
        }
      }
    }
  }
`;
