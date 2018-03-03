import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Starter } from '../components/Starter';

import '../assets/sass/main.scss';

import thumbImage01 from '../images/thumbs/01.jpg';
import thumbImage02 from '../images/thumbs/02.jpg';
import thumbImage03 from '../images/thumbs/03.jpg';
import thumbImage04 from '../images/thumbs/04.jpg';
import thumbImage05 from '../images/thumbs/05.jpg';
import thumbImage06 from '../images/thumbs/06.jpg';
import thumbImage07 from '../images/thumbs/07.jpg';
import thumbImage08 from '../images/thumbs/08.jpg';
import thumbImage09 from '../images/thumbs/09.jpg';
import thumbImage10 from '../images/thumbs/10.jpg';
import thumbImage11 from '../images/thumbs/11.jpg';
import thumbImage12 from '../images/thumbs/12.jpg';


export default function Index({ data }) {

  return (
			<div id="wrapper">

				{/* <!-- Header --> */}
					<header id="header">
						<h1><a href="index.html"><strong>Multiverse</strong> by HTML5 UP</a></h1>
						<nav>
							<ul>
								<li><a href="#footer" class="icon fa-info-circle">About</a></li>
							</ul>
						</nav>
					</header>

				{/* <!-- Main --> */}
					<div id="main">
						<article class="thumb">
							<a href="images/fulls/01.jpg" class="image"><img src={thumbImage01} alt="" /></a>
							<h2>Magna feugiat lorem</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/02.jpg" class="image"><img src={thumbImage02} alt="" /></a>
							<h2>Nisl adipiscing</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/03.jpg" class="image"><img src={thumbImage03} alt="" /></a>
							<h2>Tempus aliquam veroeros</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/04.jpg" class="image"><img src={thumbImage04} alt="" /></a>
							<h2>Aliquam ipsum sed dolore</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/05.jpg" class="image"><img src={thumbImage05} alt="" /></a>
							<h2>Cursis aliquam nisl</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/06.jpg" class="image"><img src={thumbImage06} alt="" /></a>
							<h2>Sed consequat phasellus</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/07.jpg" class="image"><img src={thumbImage07} alt="" /></a>
							<h2>Mauris id tellus arcu</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/08.jpg" class="image"><img src={thumbImage08} alt="" /></a>
							<h2>Nunc vehicula id nulla</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/09.jpg" class="image"><img src={thumbImage09} alt="" /></a>
							<h2>Neque et faucibus viverra</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/10.jpg" class="image"><img src={thumbImage10} alt="" /></a>
							<h2>Mattis ante fermentum</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/11.jpg" class="image"><img src={thumbImage11} alt="" /></a>
							<h2>Sed ac elementum arcu</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
						<article class="thumb">
							<a href="images/fulls/12.jpg" class="image"><img src={thumbImage12} alt="" /></a>
							<h2>Vehicula id nulla dignissim</h2>
							<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
						</article>
					</div>

				{/* <!-- Footer --> */}
					<footer id="footer" class="panel">
						<div class="inner split">
							<div>
								<section>
									<h2>Magna feugiat sed adipiscing</h2>
									<p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>
								</section>
								<section>
									<h2>Follow me on ...</h2>
									<ul class="icons">
										<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
										<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
										<li><a href="#" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
									</ul>
								</section>
								<p class="copyright">
									&copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
								</p>
							</div>
							<div>
								<section>
									<h2>Get in touch</h2>
									<form method="post" action="#">
										<div class="field half first">
											<input type="text" name="name" id="name" placeholder="Name" />
										</div>
										<div class="field half">
											<input type="text" name="email" id="email" placeholder="Email" />
										</div>
										<div class="field">
											<textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
										</div>
										<ul class="actions">
											<li><input type="submit" value="Send" class="special" /></li>
											<li><input type="reset" value="Reset" /></li>
										</ul>
									</form>
								</section>
							</div>
						</div>
					</footer>

			</div>
  );
}
