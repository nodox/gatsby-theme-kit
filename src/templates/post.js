import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  return (
    <Post post={post} next={next} prev={prev} />
  );
}

export const pageQuery = graphql`
  query MassivelyBlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
