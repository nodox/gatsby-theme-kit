import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../styles/main.scss';

import image_fulls_01 from '../images/fulls/01.jpg';
import image_fulls_02 from '../images/fulls/02.jpg';
import image_fulls_03 from '../images/fulls/03.jpg';
import image_fulls_04 from '../images/fulls/04.jpg';
import image_fulls_05 from '../images/fulls/05.jpg';
import image_fulls_06 from '../images/fulls/06.jpg';
import image_fulls_07 from '../images/fulls/07.jpg';
import image_fulls_08 from '../images/fulls/08.jpg';
import image_fulls_09 from '../images/fulls/09.jpg';
import image_fulls_10 from '../images/fulls/10.jpg';
import image_fulls_11 from '../images/fulls/11.jpg';
import image_fulls_12 from '../images/fulls/12.jpg';


import image_thumbs_01 from '../images/thumbs/01.jpg';
import image_thumbs_02 from '../images/thumbs/02.jpg';
import image_thumbs_03 from '../images/thumbs/03.jpg';
import image_thumbs_04 from '../images/thumbs/04.jpg';
import image_thumbs_05 from '../images/thumbs/05.jpg';
import image_thumbs_06 from '../images/thumbs/06.jpg';
import image_thumbs_07 from '../images/thumbs/07.jpg';
import image_thumbs_08 from '../images/thumbs/08.jpg';
import image_thumbs_09 from '../images/thumbs/09.jpg';
import image_thumbs_10 from '../images/thumbs/10.jpg';
import image_thumbs_11 from '../images/thumbs/11.jpg';
import image_thumbs_12 from '../images/thumbs/12.jpg';



export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: image_thumbs_01,
    }
  }


  setCurrentImage(path) {
    this.setState({
      current: path,
    })
  }



  render() {
    const thumb_imgs = [
      image_thumbs_01,
      image_thumbs_02,
      image_thumbs_03,
      image_thumbs_04,
      image_thumbs_05,
      image_thumbs_06,
      image_thumbs_07,
      image_thumbs_08,
      image_thumbs_09,
      image_thumbs_10,
      image_thumbs_11,
      image_thumbs_12,
    ];

    const articles = thumb_imgs.map((obj, idx) => {
      return (
        <article key={idx}>
          <a onClick={() => this.setCurrentImage(obj)} className="thumbnail" href='#' ><img src={obj} alt="" /></a>
          <h2>Diam tempus accumsan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
      );
    });

    return (

  		<div>
        <div id="viewer">
          <div className="inner">
            <div className="nav-next"></div>
            <div className="nav-previous"></div>
            <div className="toggle"></div>
          </div>
          <div className="slide active">
            <div className="caption">
              <h2>Morbi eget vitae adipiscing</h2>
              <p>In quis vulputate dui. Maecenas metus elit, dictum praesent lacinia lacus.</p>
            </div>
            <div className="image"
                style={{
                  backgroundPosition: 'center center',
                  backgroundImage: `url(${this.state.current})`}}></div>
          </div>
        </div>

        <div id="main">
          <header id="header">
  					<h1>Lens</h1>
  					<p>Just another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
  					<ul className="icons">
  						<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
  						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
  						<li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
  						<li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
  					</ul>
  				</header>

  				<section id="thumbnails">
            {articles}
  				</section>


  				<footer id="footer">
  					<ul className="copyright">
  						<li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a>.</li>
  					</ul>
  				</footer>
        </div>

  		</div>
    );

  }
}
