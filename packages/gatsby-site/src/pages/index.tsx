import React from "react";
import Half from "../components/Half/";
import MailingListHalf from  "../components/MailingListHalf/";
import LatestRelease from '../components/LatestRelease/';
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Albums } from '../data/albums';

type Props = {
  data: {
    albums: Albums,
  }
}

type State = {

}

export default class SiteIndex extends React.Component<Props, State> {
  render(){
    return (
      <Layout>
        <div>
          <Half style={{
            backgroundImage: 'url(/images/stv1bgt.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            padding: '1em 0',
            backgroundPosition: 'center'}}>
            <MailingListHalf />
          </Half>
          <LatestRelease data={this.props.data.albums}/>
        </div>
      </Layout>
    );
  }
};

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
            release_type
            releaseYear: released_on(formatString: "YYYY")
            links {
              bandcamp
              spotify
              itunes
              amazon
              archive
            }
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
