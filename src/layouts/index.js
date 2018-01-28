import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Copyright from '../components/Copyright';
import Intro from '../components/Intro';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Post from '../components/Post';
import { NavPanel } from '../components/NavPanel';
import { MenuButton } from '../components/MenuButton';
import { Background } from '../components/Background';
import { Massively } from '../Massively';

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props;

    return (
      <Massively data={data}>
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
