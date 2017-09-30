import React from 'react';
import Link from 'gatsby-link';

export default class NavPanel extends React.Component {

  constructor() {
    super();
  }

  closePanel(scrollToElement = false) {
    this.props.closePanelHandler()

    // if (scrollToElement) {
    //   // Scroll to a certain element
    //   document.querySelector('.major').scrollIntoView({ 
    //     behavior: 'smooth' 
    //   });
    // }
  }

  render() {
    return (
      <div id="navPanel">
        <nav>
          <ul className="links">
            <li><Link to="/" onClick={() => this.closePanel() }>Home</Link></li>
            <li><Link to="/about" onClick={() => this.closePanel() }>About</Link></li>
            <li><Link to="/speaking"onClick={() => this.closePanel() }>Speaking</Link></li>
            <li><Link to="/contact" onClick={() => this.closePanel() }>Contact</Link></li>
          </ul>
          <ul className="icons alt">
            <li><a href="https://www.twitter.com/stevennatera" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/snatera" className="icon fa-linkedin alt"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.github.com/nodox" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
          </ul>
        </nav>
        <a href="#navPanel" className="close" onClick={() => this.closePanel() } style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}></a>
      </div>
    );
  }
}