import React from "react";
import Content from '../components/Content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
const styles = require('./albumStyles.module.css');
import AlbumArtwork from '../components/AlbumArtwork/';
import { graphql } from "gatsby"
import { Albums } from '../data/albums';

const AlbumDisplay = (props: any) => {
  return <div className={styles.list}>
    {props.children}
  </div>
}

type Props = {
  data: {
    albums: Albums
  }
}

type State = {

}

export default class AlbumIndex extends React.Component<Props, State> {
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
  query {
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
