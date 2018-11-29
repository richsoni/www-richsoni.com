import React from "react";
import styles from './style.module.css';
import moment from "moment";
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import AlbumArtwork from '../components/AlbumArtwork/';
import {nodesByBasename} from '../utils/data';
import { graphql } from "gatsby"

const Track = (props) => {
  return <li><a href={props.data.fields.url}>{props.data.frontmatter.title}</a></li>
}

const Tracklist = (props) => {
  const {tracks,songs} = props;
  const songsByBasename = nodesByBasename(songs)
  return <ol className='tracklist'>
    {tracks.map((track) => <Track key={track} data={songsByBasename[track]} />)}
  </ol>
}

export default ({ data }) => {
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
