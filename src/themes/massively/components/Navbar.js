import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';


// <GatsbyLink to={post.frontmatter.path}>
//   {post.frontmatter.title}
// </GatsbyLink>

// <Helmet
//   title="Gatsby Default (Blog) Starter"
//   meta={[
//     { name: 'description', content: 'Sample' },
//     { name: 'keywords', content: 'sample, something' },
//   ]}
// />
export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPath } = this.props;
    const { initialLinks } = this.props.config;

    const navLinks = initialLinks.paths.map((obj, idx) => {
      return (
        <li key={idx} className={obj.path === currentPath ? 'active' : ''}>
          <Link to={obj.path}>{obj.title}</Link>
        </li>
      );
    });

    const socialLinks = initialLinks.socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon ${obj.icon}`}>
            <span className="label">{obj.name}</span>
          </a>
        </li>
      );
    });

    return (
      <nav id="nav">
        <ul className="links">
          {navLinks}
        </ul>
        <ul className="icons">
          {socialLinks}
        </ul>
      </nav>
    );
  }
}
