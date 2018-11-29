import React from "react";
import Content from '../components/content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import styles from './albumStyles.module.css';
import AlbumArtwork from '../components/AlbumArtwork/';
import { graphql } from "gatsby"

const AlbumDisplay = (props) => {
  return <div className={styles.list}>
    {props.children}
  </div>
}

export default class AlbumIndex extends React.Component {
  render(){
    return <Content>
      <Breadcrumbs>
        <Breadcrumb>Albums</Breadcrumb>
      </Breadcrumbs>
      <AlbumDisplay>
        {this.props.data.albums.edges.map((a) => a.node).map((a) => {
          return <AlbumArtwork overlay={true} clickable={true} key={a.id} className={styles.item} data={a} />
        })}
      </AlbumDisplay>
    </Content>
  }
}

export const query = graphql`
  query AlbumIndex {
    albums: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___released_on] }
      filter: { fields: { relativeDirectory: {eq: "albums"}  }}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            releaseYear: released_on(formatString: "YYYY")
          }
          fields {
            url
            basename
          }
        }
      }
    }

}
`
