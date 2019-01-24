import React from "react";
require('./style.css');
import moment from "moment";
import Content from '../components/Content/';
import {Breadcrumbs} from '../components/Breadcrumbs/';
import {Breadcrumb} from '../components/Breadcrumbs/';
import { graphql } from "gatsby"

export default ({ data }: any) => {
  const post = data.markdownRemark;
  const date = moment(post.fields.date).format('MM/DD/YYYY')
  return (
    <Content>
      <div className='blog-post'>
        <div className='post-heading'>
          <Breadcrumbs>
            <Breadcrumb href='/posts'>Posts</Breadcrumb>
            <Breadcrumb>{post.frontmatter.title}</Breadcrumb>
          </Breadcrumbs>
          <div style={{fontStyle: 'italic', marginBottom: '1em'}}>Posted {date}</div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${post.frontmatter.hero})`,
          width: '100%',
          height: post.frontmatter.hero ? '280px' : 0,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
      }} />
      <div className='blog-post-body' >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Content>
  );
};

export const query = graphql`
  query ($url: String!) {
    markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        hero
      }
      fields {
        date
      }
    }
  }
`;
