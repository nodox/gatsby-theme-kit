import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../styles/plexer.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Hello World!</h1>
      <Link to="/about">About</Link>
      {posts
        .map(({ node: post }) => {
          return (
            <Link key={post.id} to={post.frontmatter.path} className="preview">
              <h3>{post.frontmatter.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          );
        })}
    </div>
  );
}


export const pageQuery = graphql`
  query PlexerIndexQuery {
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
