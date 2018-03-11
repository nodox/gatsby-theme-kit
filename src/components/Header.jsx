import React from 'react';
import logo from '../images/logo.svg';

export default function Header(props) {
  return (
    <header id="header" className="alt">
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <h1>Stellar</h1>
      <p>Just another free, fully responsive site template<br />
        built by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>
  )
}