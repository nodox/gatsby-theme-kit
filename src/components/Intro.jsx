import React from 'react';
import picture from '../images/pic01.jpg'

export default function Intro(props) {
  return (
    <section id="intro" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Ipsum sed adipiscing</h2>
          </header>
          <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
            adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
            Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
          <ul className="actions">
            <li><a href="generic.html" className="button">Learn More</a></li>
          </ul>
        </div>
        <span className="image"><img src={picture} alt="" /></span>
      </div>
    </section>
  )
}