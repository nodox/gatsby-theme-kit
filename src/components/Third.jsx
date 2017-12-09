import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import image_6 from '../images/pic07.jpg';

export default function Third(props) {

  return (
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
  );
}
