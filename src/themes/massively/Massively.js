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
import { NavPanel } from './components/NavPanel';
import { MenuButton } from './components/MenuButton';
import * as config from './massivelyConfig';

import './css/font-awesome.min.css';
import './css/main.css';
import './css/noscript.css';
import './css/custom.css';

export class Massively extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelVisible: false,
      currentPathname: this.props.data.location.pathname
    };
  }

  openPanel() {
    this.setState({
      isPanelVisible: true
    });
  }

  closePanel() {
    this.setState({
      isPanelVisible: false
    });
  }

  getIntroDescription(path) {
    return config.introText[path];
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.data.location;
    this.setState((prevState, props) => {
      return {
        currentPathname: pathname
      };
    });
  }

  render() {
    const { pathname } = this.props.data.location;

    let isVisible = classNames({
      'is-navPanel-visible': this.state.isPanelVisible
    });

    const children = React.Children.map(this.props.children, child => {
      if (child.type.name === 'NavPanel') {
        return React.cloneElement(child, {
          navLinks: config.initialLinks,
          closePanel: () => this.closePanel(),
        });
      } else if (child.type.name === 'MenuButton') {
        return React.cloneElement(child, {
          openPanel: () => this.openPanel(),
        });
      } else if (child.type.name === 'Copyright') {
        return React.cloneElement(child, {
          data: config.copyright,
        });
      } else if (child.type.name === 'Navbar') {
        return React.cloneElement(child, {
          links: config.initialLinks,
          currentPath: this.state.currentPathname
        });
      } else if (child.type.name === 'Intro') {
        return React.cloneElement(child, {
          description: this.getIntroDescription(pathname),
        });
      } else {
        return child;
      }
    });

    return (
      <div id="pseudoBody" className={isVisible}>
        <div id="wrapper" className="fade-in">
          {children}
        </div>
      </div>
    );
  }
}
