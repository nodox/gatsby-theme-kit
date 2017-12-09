import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Header(props) {

  return (
    <section id="header" className="dark">
      <header>
        <h1>Welcome to Tessellate</h1>
        <p>A free responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
      </header>
      <footer>
        <a href="#first" className="button scrolly">Proceed to second phase</a>
      </footer>
    </section>
  );
}
