import React from 'react';
import Link from 'gatsby-link';

export default class FeaturedPost extends React.Component {
  render() {

    return (
      <article className="post featured">
        <header className="major">
          <span className="date">{post.frontmatter.date}</span>
          <h2><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h2>
          <p>{post.excerpt}</p>
        </header>
        <Link to={post.frontmatter.path} className="image main"><img src="images/pic01.jpg" alt="" /></Link>
        <ul className="actions">
          <li><Link to={post.frontmatter.path} className="button big">Full Story</Link></li>
        </ul>
      </article>
    );
  }
}