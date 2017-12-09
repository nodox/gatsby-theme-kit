import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import image_0 from '../images/pic01.jpg';
import image_1 from '../images/pic02.jpg';
import image_2 from '../images/pic03.jpg';
import image_3 from '../images/pic04.jpg';
import image_4 from '../images/pic05.jpg';
import image_5 from '../images/pic06.jpg';

import '../styles/main.scss';

export default function Index({ data }) {

  return (
    <div>

  			<section id="header" class="dark">
  				<header>
  					<h1>Welcome to Tessellate</h1>
  					<p>A free responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
  				</header>
  				<footer>
  					<a href="#first" class="button scrolly">Proceed to second phase</a>
  				</footer>
  			</section>

  			<section id="first" class="main">
  				<header>
  					<div class="container">
  						<h2>Tessellate is a free responsive site template</h2>
  						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
  						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
  					</div>
  				</header>
  				<div class="content dark style1 featured">
  					<div class="container">
  						<div class="row">
  							<div class="4u 12u(narrow)">
  								<section>
  									<span class="feature-icon"><span class="icon fa-clock-o"></span></span>
  									<header>
  										<h3>Gravida</h3>
  									</header>
  									<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
  									Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
  									ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
  									accumsan vivamus.</p>
  								</section>
  							</div>
  							<div class="4u 12u(narrow)">
  								<section>
  									<span class="feature-icon"><span class="icon fa-bolt"></span></span>
  									<header>
  										<h3>Vivamus</h3>
  									</header>
  									<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
  									Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
  									ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
  									accumsan vivamus.</p>
  								</section>
  							</div>
  							<div class="4u 12u(narrow)">
  								<section>
  									<span class="feature-icon"><span class="icon fa-cloud"></span></span>
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
  						<div class="row">
  							<div class="12u">
  								<footer>
  									<a href="#second" class="button scrolly">Gravida tempor lacinia</a>
  								</footer>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>

  			<section id="second" class="main">
  				<header>
  					<div class="container">
  						<h2>Euismod sed feugiat lorem tempus magna</h2>
  						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
  						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
  					</div>
  				</header>
  				<div class="content dark style2">
  					<div class="container">
  						<div class="row">
  							<div class="4u 12u(narrow)">
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
  										<a href="#third" class="button scrolly">Accumsan nisi tempor</a>
  									</footer>
  								</section>
  							</div>
  							<div class="8u 12u(narrow)">
  								<div class="row">
  									<div class="6u"><a href="#" class="image fit"><img src={image_0} alt="" /></a></div>
  									<div class="6u"><a href="#" class="image fit"><img src={image_1} alt="" /></a></div>
  									<div class="6u"><a href="#" class="image fit"><img src={image_2} alt="" /></a></div>
  									<div class="6u"><a href="#" class="image fit"><img src={image_3} alt="" /></a></div>
  									<div class="6u"><a href="#" class="image fit"><img src={image_4} alt="" /></a></div>
  									<div class="6u"><a href="#" class="image fit"><img src={image_5} alt="" /></a></div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>

  			<section id="third" class="main">
  				<header>
  					<div class="container">
  						<h2>Ornare varius lorem ipsum ante lectus</h2>
  						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
  						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
  					</div>
  				</header>
  				<div class="content dark style3">
  					<div class="container">
  						<span class="image featured"><img src="images/pic07.jpg" alt="" /></span>
  						<div class="row">
  							<div class="4u 12u(narrow)">
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
  							<div class="4u 12u(narrow)">
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
  							<div class="4u 12u(narrow)">
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
  									<a href="#fourth" class="button scrolly">Ipsum ornare lorem dolor</a>
  								</footer>
  							</div>
  						</div>
  					</div>
  				</div>
  			</section>

  			<section id="fourth" class="main">
  				<header>
  					<div class="container">
  						<h2>Sed feugiat ipsum consequat</h2>
  						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
  						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
  					</div>
  				</header>
  				<div class="content style4 featured">
  					<div class="container 75%">
  						<form method="post" action="#">
  							<div class="row 50%">
  								<div class="6u 12u(mobile)"><input type="text" placeholder="Name" /></div>
  								<div class="6u 12u(mobile)"><input type="text" placeholder="Email" /></div>
  							</div>
  							<div class="row 50%">
  								<div class="12u"><textarea name="message" placeholder="Message"></textarea></div>
  							</div>
  							<div class="row">
  								<div class="12u">
  									<ul class="actions">
  										<li><input type="submit" class="button" value="Send Message" /></li>
  										<li><input type="reset" class="button alt" value="Clear Form" /></li>
  									</ul>
  								</div>
  							</div>
  						</form>
  					</div>
  				</div>
  			</section>

  			<section id="footer">
  				<ul class="icons">
  					<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
  					<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
  					<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
  					<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
  					<li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
  				</ul>
  				<div class="copyright">
  					<ul class="menu">
  						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
  					</ul>
  				</div>
  			</section>

    </div>
  );
}
