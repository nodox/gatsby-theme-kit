import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import image_0 from '../images/pic01.jpg';
import image_1 from '../images/pic02.jpg';
import image_2 from '../images/pic03.jpg';
import image_3 from '../images/pic04.jpg';
import image_4 from '../images/pic05.jpg';
import image_5 from '../images/pic06.jpg';
import image_6 from '../images/pic07.jpg';

import '../styles/main.scss';

export default function Index({ data }) {

  return (
    <div>

  			<section id="header" className="dark">
  				<header>
  					<h1>Welcome to Tessellate</h1>
  					<p>A free responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
  				</header>
  				<footer>
  					<a href="#first" className="button scrolly">Proceed to second phase</a>
  				</footer>
  			</section>

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

  			<section id="third" className="main">
  				<header>
  					<div className="container">
  						<h2>Ornare varius lorem ipsum ante lectus</h2>
  						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
  						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
  					</div>
  				</header>
  				<div className="content dark style3">
  					<div className="container">
  						<span className="image featured"><img src={image_6} alt="" /></span>
  						<div className="row">
  							<div className="4u 12u(narrow)">
  								<h3>Diam vivamus turpis lorem sodales lectus ornare</h3>
  								<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
  								tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
  								vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
  								augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
  								lorem ipsum dolor placerat magna tempus feugiat.</p>
  								<p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
  								accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
  								euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu eget ornare varius
  								gravida dolore euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu
  								eget ornare et magna.</p>
  							</div>
  							<div className="4u 12u(narrow)">
  								<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
  								tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
  								vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
  								augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
  								lorem ipsum dolor placerat magna tempus feugiat.</p>
  								<p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
  								accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
  								euismod lorem ipsum dolor sit amet consequat eget ornare varius gravida euismod.
  								Gravida dis lorem ipsum dolor placerat magna tempus feugiat magna tempus lorem.</p>
  								<p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
  								accumsan vivamus augue cubilia.</p>
  							</div>
  							<div className="4u 12u(narrow)">
  								<p>Placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
  								lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc
  								euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue
  								cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
  								lorem ipsum dolor placerat magna tempus feugiat. Lectus ante vel nunc euismod
  								est turpis sodales. Diam tempor dui lacinia dolore.</p>
  								<p>Accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida
  								dolore euismod lorem ipsum dolor sit amet conseismod lorem ipsum dolor sit amet
  								consequat lorem ipsum consequat feugiat sed tempus euismod feugiat veroeros.</p>
  								<footer>
  									<a href="#fourth" className="button scrolly">Ipsum ornare lorem dolor</a>
  								</footer>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>

  			<section id="fourth" className="main">
  				<header>
  					<div className="container">
  						<h2>Sed feugiat ipsum consequat</h2>
  						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
  						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
  					</div>
  				</header>
  				<div className="content style4 featured">
  					<div className="container 75%">
  						<form method="post" action="#">
  							<div className="row 50%">
  								<div className="6u 12u(mobile)"><input type="text" placeholder="Name" /></div>
  								<div className="6u 12u(mobile)"><input type="text" placeholder="Email" /></div>
  							</div>
  							<div className="row 50%">
  								<div className="12u"><textarea name="message" placeholder="Message"></textarea></div>
  							</div>
  							<div className="row">
  								<div className="12u">
  									<ul className="actions">
  										<li><input type="submit" className="button" value="Send Message" /></li>
  										<li><input type="reset" className="button alt" value="Clear Form" /></li>
  									</ul>
  								</div>
  							</div>
  						</form>
  					</div>
  				</div>
  			</section>

  			<section id="footer">
  				<ul className="icons">
  					<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
  					<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
  					<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
  					<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
  					<li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
  				</ul>
  				<div className="copyright">
  					<ul className="menu">
  						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
  					</ul>
  				</div>
  			</section>

    </div>
  );
}
