import React from 'react';
import Link from 'gatsby-link';

export default class First extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="first" className="main special">
        <header className="major">
          <h2>Magna veroeros</h2>
        </header>
        <ul className="features">
          <li>
            <span className="icon major style1 fa-code"></span>
            <h3>Ipsum consequat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed
              consequat.</p>
          </li>
          <li>
            <span className="icon major style3 fa-copy"></span>
            <h3>Amed sed feugiat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed
              consequat.</p>
          </li>
          <li>
            <span className="icon major style5 fa-diamond"></span>
            <h3>Dolor nullam</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed
              consequat.</p>
          </li>
        </ul>
        <footer className="major">
          <ul className="actions">
            <li>
              <Link to="/generic" className="button">Learn More</Link>
            </li>
          </ul>
        </footer>
      </section>
    )
  }
}