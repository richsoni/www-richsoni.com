import React from "react";
const styles = require('./style.module.css');
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import AlbumArtwork from '../components/AlbumArtwork/';
import {nodesByBasename, NodesByBasename} from '../utils/data';
import { graphql } from "gatsby"
import { Songs } from '../data/songs';
import { AlbumNode } from '../data/albums';

type AlbumProps = {
  data: {
    songs: Songs,
    album: AlbumNode
  }
}

type TracklistProps = {
  songs: Songs
  tracks?: string[]
}

const Track = (props: any) => {
  return <li><a href={props.data.fields.url}>{props.data.frontmatter.title}</a></li>
}

const Tracklist = (props: TracklistProps) => {
  const {tracks,songs} = props;
  const songsByBasename: NodesByBasename = nodesByBasename(songs)
  if(!tracks) { return (<div />) }
  return <ol className='tracklist'>
    {tracks.map((track) => {
      const song = songsByBasename[track]
      if(!song) { return <div /> }
      return <Track key={track} data={song} />
    })}
  </ol>
}

export default ({ data }: AlbumProps) => {
  const album = data.album;
  const songs = data.songs;
  return (
    <Content>
      <Breadcrumbs>
        <Breadcrumb href="/albums">Albums</Breadcrumb>
        <Breadcrumb>{album.frontmatter.title}</Breadcrumb>
      </Breadcrumbs>
      <h2>Release Date: {album.frontmatter.released_on}</h2>
      <AlbumArtwork data={album} className={styles.artwork} overlay={false} clickable={false} />
      <div style={{backgroundImage: `url(/images/releases/${album.fields.basename}.png)`}} />
      <Tracklist songs={songs} tracks={album.frontmatter.tracklist} />
    </Content>
  )
};

export const query = graphql`
  query ($url: String!) {
    album: markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        released_on(formatString: "MMMM DD, YYYY")
        tracklist
      }
      fields {
        basename
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
  }
`;
