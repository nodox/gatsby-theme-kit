import React from 'react';
import Link from 'gatsby-link';

export default class PreviewPost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <header>
          <span className="date">{this.props.post.frontmatter.date}</span>
          <h2>
            <Link to={this.props.post.frontmatter.path}>
              {this.props.post.frontmatter.title}
            </Link>
          </h2>
        </header>
        <p>
          {this.props.post.excerpt}
        </p>
        <ul className="actions">
          <li>
            <Link to={this.props.post.frontmatter.path} className="button">Full Story</Link>
          </li>
        </ul>
      </article>
    );
  }
}