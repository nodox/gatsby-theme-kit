import React from 'react';
import Link from 'gatsby-link';

export default class FeaturedPost extends React.Component {
  render() {

    return (
      <article className="post featured">
        <header className="major">
          <span className="date">{this.props.post.frontmatter.date}</span>
          <h2><Link to={this.props.post.frontmatter.path}>{this.props.post.frontmatter.title}</Link></h2>
          <p>{this.props.post.excerpt}</p>
        </header>
        <Link to={this.props.post.frontmatter.path} className="image main"><img src="images/pic01.jpg" alt="" /></Link>
        <ul className="actions">
          <li><Link to={this.props.post.frontmatter.path} className="button big">Full Story</Link></li>
        </ul>
      </article>
    );
  }
}
