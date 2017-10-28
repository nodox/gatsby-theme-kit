import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Copyright from '../themes/massively/components/Copyright';
import Intro from '../themes/massively/components/Intro';
import Header from '../themes/massively/components/Header';
import Footer from '../themes/massively/components/Footer';
import Navbar from '../themes/massively/components/Navbar';
import Pagination from '../themes/massively/components/Pagination';
import Post from '../themes/massively/components/Post';
import { NavPanel } from '../themes/massively/components/NavPanel';
import { MenuButton } from '../themes/massively/components/MenuButton';
import { Background } from '../themes/massively/components/Background';
import { Massively } from '../themes/massively/Massively';

export default class Template extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Massively data={this.props}>
        <Intro />
        <Header />
        <Navbar />
        {this.props.children()}
        <Footer />
        <Copyright />
        <Background />
        <MenuButton />
        <NavPanel />
      </Massively>
    );
  }
}
