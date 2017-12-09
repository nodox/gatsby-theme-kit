import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import image_1 from '../images/pic02.jpg';
import image_2 from '../images/pic03.jpg';
import image_3 from '../images/pic04.jpg';


export default function Third(props) {
  return (
    <section id="three" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Adipiscing amet consequat</h2>
        </header>
        <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
        <div className="row 150%">
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_1} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_2} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_3} alt="" /></span>
            <h3>Magna feugiat lorem</h3>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
