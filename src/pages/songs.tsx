import React from "react";
import { graphql } from "gatsby"
import {sortObjMomentASC, sortObjMomentDESC} from '../utils/sorting';
import momentify from '../utils/momentify';
import {eventsBySong} from '../utils/data';
import Table from '../components/Table/';
import Tabs from '../components/Tabs/';
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import { Songs } from '../data/songs';

type SongQuery = {
  songs: Songs,
  events: {}
}

type SongIndexProps = {
  data: SongQuery
}

type ParsedSong = {
  title: string,
  composedAt: string,
  artists: string,
  isMine: boolean,
  composedAtMoment: any,
  url: string,
  performanceCount: number,
  firstPerformanceMoment: any,
  firstPerformance: string,
  lastPerformanceMoment: any,
  lastPerformance: string,
  key: string,
}


const tableFields = [
  {
    title: 'Song',
    key: 'title',
  },
  {
    title: 'Artists',
    key: 'artists',
  },
  {
    title: 'Date Composed',
    key: 'composedAt',
    sortASC: sortObjMomentASC('composedAtMoment'),
    sortDESC: sortObjMomentDESC('composedAtMoment'),
  },
  {
    title: "Times Played",
    key: "performanceCount",
  },
  {
    title: 'First Performed',
    key: 'firstPerformance',
    sortASC: sortObjMomentASC('firstPerformanceMoment'),
    sortDESC: sortObjMomentDESC('firstPerformanceMoment'),
  },
  {
    title: 'Last Performed',
    key: 'lastPerformance',
    sortASC: sortObjMomentASC('lastPerformanceMoment'),
    sortDESC: sortObjMomentDESC('lastPerformanceMoment'),
  },
];

const parseSongs = (data: SongQuery): Array<ParsedSong> => {
  const songs = data.songs.edges.map((s) => s.node)
  const _eventsBySong = eventsBySong(data.events);
  return songs.map((song) => {
    const artists = song.frontmatter.artists.sort().join(', ')
    const composedAtMoment = momentify(song.frontmatter.composed_at);
    const events = _eventsBySong[song.fields.basename] || [];
    const firstPerformance = events[events.length - 1];
    const firstPerformanceMoment = momentify(firstPerformance)
    const lastPerformance = events[0];
    const lastPerformanceMoment = momentify(lastPerformance)
    return {
      title: song.frontmatter.title,
      composedAt: composedAtMoment ? composedAtMoment.format('YYYY-MM-DD') : null,
      artists: artists,
      isMine: !!artists.match('Rich Soni'),
      composedAtMoment: composedAtMoment,
      url: song.fields.url,
      performanceCount: events.length,
      firstPerformanceMoment,
      firstPerformance,
      lastPerformanceMoment,
      lastPerformance,
      key: song.id,
    }
  });
}

export default class SongIndex extends React.Component<SongIndexProps, {}> {

  render(){
    return (
      <Content>
        <Breadcrumbs>
          <Breadcrumb>Songs</Breadcrumb>
        </Breadcrumbs>
        <Tabs tabs={this.tabs()} />
      </Content>
    );
  }

  tabs() {
    const songs = parseSongs(this.props.data);
    return [{
      content: () => <Table
        fields={tableFields}
        items={songs}
      />,
      title: "All",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s: ParsedSong) => s.isMine)}
      />,
      title: "Originals",
    }, {
      content: () => <Table
        fields={tableFields}
        items={songs.filter((s: ParsedSong) => !s.isMine)}
      />,
      title: "Covers",
    },
    ];
  }
};

export const query = graphql`
  query {
    songs: allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      filter: { fields: { relativeDirectory: {eq: "songs"}  }}
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              hero
              composed_at(formatString: "YYYY-MM-DD")
              artists
            }
            fields {
              url
              basename
              date(formatString: "YYYY-MM-DD")
            }
            excerpt
          }
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
`
