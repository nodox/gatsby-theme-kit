import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PreviewPost from '../themes/massively/components/PreviewPost';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <div id="main">
      <section className="posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <PreviewPost key={post.id} post={post} />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
