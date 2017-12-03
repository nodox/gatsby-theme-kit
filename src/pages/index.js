import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Starter } from '../components/Starter';

export default function Index({ data }) {

  return (
    <div>
      <h1>Hello World!</h1>
      <Starter />
      <Link to="/start">Start</Link>
    </div>
  );
}
