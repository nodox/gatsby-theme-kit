import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Footer from '../components/Footer';

import '../styles/main.scss';

export default function Index({ data }) {

  return (
    <div>
        <Header />
        <First />
        <Second />
        <Third />
        <Fourth />
        <Footer />
    </div>
  );
}
