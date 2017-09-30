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

    this.paths = [
      {
        path: '/',
        title: 'Home',
      },
      {
        path: '/about',
        title: 'About'
      }, 
      {
        path: '/speaking',
        title: 'Speaking'
      }, 
      {
        path: '/contact',
        title: 'Contact'
      },
    ]

    this.socialLinks = [
      {
        path: 'https://www.twitter.com/stevennatera',
        icon: 'twitter',
        name: 'Twitter',
      },
      {
        path: 'https://www.linkedin.com/in/snatera',
        icon: 'linkedin',
        name: 'LinkedIn',
      },
      {
        path: 'https://www.github.com/nodox',
        icon: 'github',
        name: 'Github',
      }
    ]
  }

  render() {

    const isActiveTab = (idx) => {
      let activeTab = classNames({
        'active': this.paths[idx].path === this.props.currentPath
      });
      return activeTab;
    };

    const links = this.paths.map((obj, idx) => {
      return (
        <li key={idx} className={isActiveTab(idx)}>
          <Link to={obj.path}>{obj.title}</Link>
        </li>
      );
    }); 

    const socialLinks = this.socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon fa-${obj.icon}`}><span className="label">{obj.name}</span></a>
        </li>
      );
    });

    return (
      <nav id="nav">
        <ul className="links">
          {links}
        </ul>
        <ul className="icons">
          {socialLinks}
        </ul>
      </nav>
    );
  }

}