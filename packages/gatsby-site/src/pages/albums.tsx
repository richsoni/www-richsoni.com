import React from "react";
import Content from '../components/Content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
const styles = require('./albumStyles.module.css');
import { graphql } from "gatsby"
import { Albums } from '../data/albums';
import ReactImageFallback from "react-image-fallback";
import {get} from 'lodash';

const Overlay = (props: any) => {
  const hed = props.hed;
  const dek = props.dek;
  const href = props.href || '#';
  const className = props.className;
  const children = props.children;
  const overlaySection = (
    <div className={styles.overlay}>
      <div className={styles.hed}>{hed}</div>
      <div className={styles.dek}>{dek}</div>
    </div>
  );
  if(props.href) {
    return (
       <a
         className={styles.overlayWrapper + ' ' + className}
         href={href}
       >
        {children}
        {overlaySection}
      </a>
    );
  } else {
    return (
      <div
        className={styles.overlayWrapper + ' ' + props.className}
      >
        {children}
        {overlaySection}
      </div>
    );
  }
}

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
    const props = this.props;
    return <Content>
      <Breadcrumbs>
        <Breadcrumb>Albums</Breadcrumb>
      </Breadcrumbs>
      <AlbumDisplay>
        {props.data.albums.edges.map((a) => a.node).map((a) => {
          return <Overlay
            hed={get(a, 'frontmatter.title', '')}
            dek={get(a, 'frontmatter.release', '')}
            href={get(a, 'fields.url', '')}
            className={styles.item}
            key={a.id}
          >
            <ReactImageFallback
              src={'/images/releases/'+a.fields.basename+'.png'}
              fallbackImage='/images/releases/default.png'
              className={styles.image} />
          </Overlay>
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
