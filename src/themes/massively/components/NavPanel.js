import React from 'react';
import Link from 'gatsby-link';

export default class NavPanel extends React.Component {

  constructor() {
    super();
  }

  closePanel(scrollToElement = false) {
    this.props.closePanelHandler()
  }

  render() {

    const links = this.props.links.paths.map((obj, idx) => {
      return (
        <li key={idx}>
          <Link to={obj.path} onClick={() => this.closePanel() }>{obj.title}</Link>
        </li>
      );
    });

    const socialLinks = this.props.links.socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon fa-${obj.icon} alt`}><span className="label">{obj.name}</span></a>
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
        <a href="#navPanel" className="close" onClick={() => this.closePanel() } style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}></a>
      </div>
    );
  }
}
