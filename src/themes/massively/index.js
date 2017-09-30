import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Copyright from './components/Copyright';
import Intro from './components/Intro';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Post from './components/Post';
import NavPanel from './components/NavPanel';

import './css/font-awesome.min.css';
import './css/main.css';
import './css/noscript.css';
import './css/custom.css';

export default class Massively extends React.Component {
  constructor() {
    super();


    this.state = {
      isPanelVisible: false,
      activeTab: [false, false, false, false],
    };

    this.openNavPanel = this.openNavPanel.bind(this);
    this.closeNavPanel = this.closeNavPanel.bind(this);
    // this.getIntroDescription = this.getIntroDescription.bind(this);
  }

  openNavPanel() {
    this.setState({
      isPanelVisible: true
    });
  }

  closeNavPanel() {
    this.setState({
      isPanelVisible: false
    });
  }


  getIntroDescription(path) {
    const introText = {
      '/': 'Hi! I\'m Steven Natera. I write this blog, teach software engineering workshops, and explore emerging technologies.',
      '/about': 'Hi! I\'m Steven Natera. I write this blog, teach software engineering workshops, and explore emerging technologies.',
      '/speaking': 'I deliver talks on NodeJS and I teach software engineering workshops.',
      '/contact': 'I\'m pretty easy to get hold of, here\'s how I use different channels to communicate with people and how best to contact me'
    }
    return introText[path];
  }

  render() {
    const { location } = this.props.props;

    var isVisible = classNames({
      'is-navPanel-visible': this.state.isPanelVisible
    });

    var path = location.pathname;
    var text = this.getIntroDescription(path);

    // Intro needs to be deleted except on the front page for
    // the header component to show on the mobile view of other pages
    return (
      <div id="pseudoBody" className={isVisible}>
        <div id="wrapper" className="fade-in">
          <Intro description={text} />
          <Header />
          <Navbar currentPath={path} />
            {this.props.children}
          <Footer />
          <Copyright />
          <div className="bg fixed" style={{ transform: 'none'}}></div>
          <a href="#navPanel" id="navPanelToggle" className="alt" onClick={() => this.openNavPanel()}>Menu</a>
          <NavPanel closePanelHandler={this.closeNavPanel}/>
        </div>
      </div>
    );
  }
}