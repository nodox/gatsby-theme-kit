import React from 'react';
import Link from 'gatsby-link';

export class NavPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { initialLinks } = this.props.config;
    const links = initialLinks.paths.map((obj, idx) => {
      return (
        <li key={idx}>
          <Link to={obj.path} onClick={() => this.props.closePanel() }>{obj.title}</Link>
        </li>
      );
    });

    const socialLinks = initialLinks.socialLinks.map((obj, idx) => {
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
        <span id="navPanelCloseBtn"
        className="close"
        onClick={() => this.props.closePanel() }><i className="fa fa-times" aria-hidden="true"></i></span>
      </div>
    );
  }
}
