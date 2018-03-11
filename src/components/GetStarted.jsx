import React from 'react';
import Link from 'gatsby-link';

export default function GetStarted(props) {
  return (
    <section id="cta" className="main special">
      <header className="major">
        <h2>Congue imperdiet</h2>
        <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
          posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
      </header>
      <footer className="major">
        <ul className="actions">
          <li><Link to="/generic" className="button special">Get Started</Link></li>
          <li><Link to="/generic" className="button">Learn More</Link></li>
        </ul>
      </footer>
    </section>
  )
}