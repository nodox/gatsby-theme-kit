import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Here is an about page.</p>
      <Link to="/">Home</Link>
    </div>
  );
}
