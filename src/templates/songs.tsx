import React from "react";
import moment from "moment";
import {eventsWithSong} from '../utils/data';
import Content from '../components/Content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import { graphql } from "gatsby"

interface SongFrontmatter {
  artists: string[],
  composed_at: string,
  title: string,
}

interface SongFields {
  basename: string,
  url: string,
}

interface Node {
  frontmatter: SongFrontmatter,
  fields: SongFields,
  id: string,
  html: string,
}

type Props = {
  data: {
    song: Node,
    events: {},
  },
}

export default ({ data }: Props) => {
  const song = data.song;
  const date = moment(song.frontmatter.composed_at).format('MM/DD/YYYY')
  const _eventsWithSong = eventsWithSong(data.events, song.fields.basename);
  const performedLive = eventsWithSong.length > 0 ? `Performed Live: ${_eventsWithSong.length} ${_eventsWithSong.length === 1 ? 'time' : 'times'}` : ''
  return (
    <Content>
      <Breadcrumbs>
        <Breadcrumb href="/songs">Songs</Breadcrumb>
        <Breadcrumb>{song.frontmatter.title}</Breadcrumb>
      </Breadcrumbs>
      {performedLive}
      Composed: {date}
      <div style={{marginTop: '2em'}} dangerouslySetInnerHTML={{__html: song.html}} />
    </Content>
  )
};

export const query = graphql`
  query ($url: String!) {
    song: markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        composed_at
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
