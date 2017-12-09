import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../styles/main.scss';

import image_fulls_0 from '../images/fulls/01.jpg';
import image_fulls_1 from '../images/fulls/02.jpg';
import image_fulls_2 from '../images/fulls/03.jpg';
import image_fulls_3 from '../images/fulls/04.jpg';
import image_fulls_4 from '../images/fulls/05.jpg';
import image_fulls_5 from '../images/fulls/06.jpg';
import image_fulls_6 from '../images/fulls/07.jpg';
import image_fulls_7 from '../images/fulls/08.jpg';
import image_fulls_8 from '../images/fulls/09.jpg';
import image_fulls_9 from '../images/fulls/10.jpg';
import image_fulls_10 from '../images/fulls/11.jpg';
import image_fulls_11 from '../images/fulls/12.jpg';


import image_thumbs_0 from '../images/thumbs/01.jpg';
import image_thumbs_1 from '../images/thumbs/02.jpg';
import image_thumbs_2 from '../images/thumbs/03.jpg';
import image_thumbs_3 from '../images/thumbs/04.jpg';
import image_thumbs_4 from '../images/thumbs/05.jpg';
import image_thumbs_5 from '../images/thumbs/06.jpg';
import image_thumbs_6 from '../images/thumbs/07.jpg';
import image_thumbs_7 from '../images/thumbs/08.jpg';
import image_thumbs_8 from '../images/thumbs/09.jpg';
import image_thumbs_9  from '../images/thumbs/10.jpg';
import image_thumbs_10 from '../images/thumbs/11.jpg';
import image_thumbs_11 from '../images/thumbs/12.jpg';



export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.thumb_imgs = [
      image_fulls_0,
      image_fulls_1,
      image_fulls_2,
      image_fulls_3,
      image_fulls_4,
      image_fulls_5,
      image_fulls_6,
      image_fulls_7,
      image_fulls_8,
      image_fulls_9,
      image_fulls_10,
      image_fulls_11,
    ],

    this.state = {
      currentImg: image_thumbs_1,
      currentIdx: 1,

    }
  }

  setCurrentImageAndIdx(path, pos) {
    this.setState({
      currentImg: path,
      currentIdx: pos,
    })
  }

  getNextImage() {

    this.setState((prevState, props) => {
      var newPos = (prevState.currentIdx + 1) % this.thumb_imgs.length;
      var newImg = this.thumb_imgs[prevState.currentIdx % this.thumb_imgs.length];

      return {
        currentImg: newImg,
        currentIdx: newPos,
      };
    });
  }

  getPrevImage() {

    this.setState((prevState, props) => {
      var len = this.thumb_imgs.length;
      var newPos = this.state.currentIdx;

      if (newPos <= 0) {
        newPos = len - 1;
      } else {
        newPos--;
      }

      var newImg = this.thumb_imgs[newPos];

      return {
        currentImg: newImg,
        currentIdx: newPos,
      };
    });
  }

  render() {

    const articles = this.thumb_imgs.map((obj, idx) => {
      var pos = idx++;

      return (
        <article key={pos}>
          <a onClick={() => this.setCurrentImageAndIdx(obj, pos)} className="thumbnail" href='#' ><img src={obj} alt="" /></a>
          <h2>Diam tempus accumsan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
      );
    });

    return (

  		<div>
        <div id="viewer">
          <div className="inner">
            <div onClick={() => this.getNextImage()} className="nav-next"></div>
            <div onClick={() => this.getPrevImage()} className="nav-previous"></div>
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
                  backgroundImage: `url(${this.state.currentImg})`}}></div>
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
