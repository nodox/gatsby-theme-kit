import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import image_0 from '../images/pic01.jpg';
import image_1 from '../images/pic02.jpg';
import image_2 from '../images/pic03.jpg';
import image_3 from '../images/pic04.jpg';
import image_4 from '../images/pic05.jpg';
import image_5 from '../images/pic06.jpg';

export default function Second(props) {

  return (
    <section id="second" className="main">
      <header>
        <div className="container">
          <h2>Euismod sed feugiat lorem tempus magna</h2>
          <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
          feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
        </div>
      </header>
      <div className="content dark style2">
        <div className="container">
          <div className="row">
            <div className="4u 12u(narrow)">
              <section>
                <h3>Augue vivamus sed ipsum commodo lorem dolor</h3>
                <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
                tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
                vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
                augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
                lorem ipsum dolor placerat magna tempus feugiat.</p>
                <p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
                accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
                euismod lorem ipsum dolor.</p>
                <footer>
                  <a href="#third" className="button scrolly">Accumsan nisi tempor</a>
                </footer>
              </section>
            </div>
            <div className="8u 12u(narrow)">
              <div className="row">
                <div className="6u"><a href="#" className="image fit"><img src={image_0} alt="" /></a></div>
                <div className="6u"><a href="#" className="image fit"><img src={image_1} alt="" /></a></div>
                <div className="6u"><a href="#" className="image fit"><img src={image_2} alt="" /></a></div>
                <div className="6u"><a href="#" className="image fit"><img src={image_3} alt="" /></a></div>
                <div className="6u"><a href="#" className="image fit"><img src={image_4} alt="" /></a></div>
                <div className="6u"><a href="#" className="image fit"><img src={image_5} alt="" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
