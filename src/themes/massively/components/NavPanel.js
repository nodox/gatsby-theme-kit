import React from 'react';
import Link from 'gatsby-link';

export class NavPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const links = this.props.navLinks.paths.map((obj, idx) => {
      return (
        <li key={idx}>
          <Link to={obj.path} onClick={() => this.props.closePanel() }>{obj.title}</Link>
        </li>
      );
    });

    const socialLinks = this.props.navLinks.socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon ${obj.icon} alt`}><span className="label">{obj.name}</span></a>
        </li>
      );
    });

    return (
      <div id="navPanel">
        <nav>
          <ul className="links">
          {links}
          </ul>
          <ul className="icons alt">
            {socialLinks}
          </ul>
        </nav>
        <a href="#navPanel"
        className="close"
        onClick={() => this.props.closePanel() }
        style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}></a>
      </div>
    );
  }
}
