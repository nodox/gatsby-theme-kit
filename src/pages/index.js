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



export default function Index({ data }) {

  return (

		<div>
      <div id="viewer">
        <div class="inner">
          <div class="nav-next"></div>
          <div class="nav-previous"></div>
          <div class="toggle"></div>
        </div>
        <div class="slide active">
          <div class="caption">
            <h2>Morbi eget vitae adipiscing</h2>
            <p>In quis vulputate dui. Maecenas metus elit, dictum praesent lacinia lacus.</p>
          </div>
          <div class="image"
              style={{
                backgroundPosition: 'center center',
                backgroundImage: `url(${image_fulls_01})`}}></div>
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
					<article>
						<a className="thumbnail" href={image_fulls_01} data-position="left center"><img src={image_thumbs_01} alt="" /></a>
						<h2>Diam tempus accumsan</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_02}><img src={image_thumbs_02} alt="" /></a>
						<h2>Vivamus convallis libero</h2>
						<p>Sed velit lacus, laoreet at venenatis convallis in lorem tincidunt.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_03} data-position="top center"><img src={image_thumbs_03}alt="" /></a>
						<h2>Nec accumsan enim felis</h2>
						<p>Maecenas eleifend tellus ut turpis eleifend, vitae pretium faucibus.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_04}><img src={image_thumbs_04} alt="" /></a>
						<h2>Donec maximus nisi eget</h2>
						<p>Tristique in nulla vel congue. Sed sociis natoque parturient nascetur.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_05} data-position="top center"><img src={image_thumbs_05} alt="" /></a>
						<h2>Nullam vitae nunc vulputate</h2>
						<p>In pellentesque cursus velit id posuere. Donec vehicula nulla.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_06}><img src={image_thumbs_06} alt="" /></a>
						<h2>Phasellus magna faucibus</h2>
						<p>Nulla dignissim libero maximus tellus varius dictum ut posuere magna.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_07}><img src={image_thumbs_07} alt="" /></a>
						<h2>Proin quis mauris</h2>
						<p>Etiam ultricies, lorem quis efficitur porttitor, facilisis ante orci urna.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_08}><img src={image_thumbs_08} alt="" /></a>
						<h2>Gravida quis varius enim</h2>
						<p>Nunc egestas congue lorem. Nullam dictum placerat ex sapien tortor mattis.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_09}><img src={image_thumbs_09} alt="" /></a>
						<h2>Morbi eget vitae adipiscing</h2>
						<p>In quis vulputate dui. Maecenas metus elit, dictum praesent lacinia lacus.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_10}><img src={image_thumbs_10} alt="" /></a>
						<h2>Habitant tristique senectus</h2>
						<p>Vestibulum ante ipsum primis in faucibus orci luctus ac tincidunt dolor.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_11}><img src={image_thumbs_11} alt="" /></a>
						<h2>Pharetra ex non faucibus</h2>
						<p>Ut sed magna euismod leo laoreet congue. Fusce congue enim ultricies.</p>
					</article>
					<article>
						<a className="thumbnail" href={image_fulls_12}><img src={image_thumbs_12} alt="" /></a>
						<h2>Mattis lorem sodales</h2>
						<p>Feugiat auctor leo massa, nec vestibulum nisl erat faucibus, rutrum nulla.</p>
					</article>
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
