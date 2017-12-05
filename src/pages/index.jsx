import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import { About } from '../components/About';

import '../styles/main.scss';

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: null,
      intro: 'none',
      work: 'none',
      about: 'none',
      contact: 'none',

    }
  }

  // componentDidMount() {
  //
  // }

  startArticleTransition(name = null) {
    document.body.classList.add('is-article-visible');
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
    document.getElementById('footer').style.display = 'none';

    document.getElementById('intro').style.display = 'block';
    document.getElementById('intro').classList.add('active');



  }

  endArticleTransition() {



    document.getElementById('intro').classList.remove('active');
    document.body.classList.remove('is-article-visible');

    document.getElementById('intro').style.display = 'none';
    document.getElementById('header').style.display = 'flex';
    document.getElementById('main').style.display = 'none';
    document.getElementById('footer').style.display = 'block';




  }

  render() {
    return (
      <div>
    			<div id="wrapper">
            <Header transitionHandler={(name) => this.startArticleTransition(name)}/>
    					<div id="main">
                <article id="intro">
                  <h2 className="major">Intro</h2>
                  {/* <span className="image main"><img src="images/pic01.jpg" alt="" /></span> */}
                  <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                  <div onClick={() => this.endArticleTransition()} className="close">Close</div>
                </article>
              </div>
    					<footer id="footer">
    						<p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    					</footer>
    			</div>
    			<div id="bg"></div>

      </div>
    );
  }
}
