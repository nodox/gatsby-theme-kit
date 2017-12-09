import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Fourth(props) {

  return (
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
  );
}
