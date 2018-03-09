import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Header(props) {
  return (
    <header id="header" class="alt">
      <span class="logo"><img src="images/logo.svg" alt="" /></span>
      <h1>Stellar</h1>
      <p>Just another free, fully responsive site template<br />
        built by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>
  )
}