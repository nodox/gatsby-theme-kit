import React from 'react';
import picture from '../images/pic01.jpg';

export default () =>
  <div id="main">
    <section className="post">
      <header className="major">
        <h1>NOT FOUND</h1>
      </header>
      <div className="image main"><img src={picture} alt=""/></div>
      <p>You just hit a route that does not exist... the sadness.</p>
    </section>
  </div>