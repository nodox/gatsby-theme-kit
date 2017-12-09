import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function First(props) {

  return (
    <section id="first" className="main">
      <header>
        <div className="container">
          <h2>Tessellate is a free responsive site template</h2>
          <p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
          feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
        </div>
      </header>
      <div className="content dark style1 featured">
        <div className="container">
          <div className="row">
            <div className="4u 12u(narrow)">
              <section>
                <span className="feature-icon"><span className="icon fa-clock-o"></span></span>
                <header>
                  <h3>Gravida</h3>
                </header>
                <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
                Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
                ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
                accumsan vivamus.</p>
              </section>
            </div>
            <div className="4u 12u(narrow)">
              <section>
                <span className="feature-icon"><span className="icon fa-bolt"></span></span>
                <header>
                  <h3>Vivamus</h3>
                </header>
                <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
                Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
                ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
                accumsan vivamus.</p>
              </section>
            </div>
            <div className="4u 12u(narrow)">
              <section>
                <span className="feature-icon"><span className="icon fa-cloud"></span></span>
                <header>
                  <h3>Accumsan</h3>
                </header>
                <p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
                Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
                ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
                accumsan vivamus.</p>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="12u">
              <footer>
                <a href="#second" className="button scrolly">Gravida tempor lacinia</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
