import React from 'react';
import Link from 'gatsby-link';
import { Tile } from '../components/Tile';

import '../assets/sass/main.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  _openModal() {
    console.log('hello');
  }

  _closeModal() {
    console.log('goodbye');
  }

  render() {
    return (
  			<div id="wrapper">

  				{/* <!-- Header --> */}
  					<header id="header">
  						<h1><a href="index.html"><strong>Multiverse</strong> by HTML5 UP</a></h1>
  						<nav>
  							<ul>
  								<li><a href="#footer" className="icon fa-info-circle">About</a></li>
  							</ul>
  						</nav>
  					</header>

  				{/* <!-- Main --> */}
  					<div id="main">
              {this.props.data.allMarkdownRemark.edges.map(({ node }, idx) => {
                return (<Tile
                  key={idx}
                  title={node.frontmatter.title}
                  description={node.frontmatter.html}
                  modalImage={node.frontmatter.modalImage.childImageSharp.sizes.src}
                  thumbnailImage={node.frontmatter.thumbnailImage.childImageSharp.sizes.src}
                />)
              })}
  					</div>

  				{/* <!-- Footer --> */}
  					<footer id="footer" className="panel">
  						<div className="inner split">
  							<div>
  								<section>
  									<h2>Magna feugiat sed adipiscing</h2>
  									<p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>
  								</section>
  								<section>
  									<h2>Follow me on ...</h2>
  									<ul className="icons">
  										<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
  										<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
  										<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
  										<li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
  										<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
  										<li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
  									</ul>
  								</section>
  								<p className="copyright">
  									&copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
  								</p>
  							</div>
  							<div>
  								<section>
  									<h2>Get in touch</h2>
  									<form method="post" action="#">
  										<div className="field half first">
  											<input type="text" name="name" id="name" placeholder="Name" />
  										</div>
  										<div className="field half">
  											<input type="text" name="email" id="email" placeholder="Email" />
  										</div>
  										<div className="field">
  											<textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
  										</div>
  										<ul className="actions">
  											<li><input type="submit" value="Send" className="special" /></li>
  											<li><input type="reset" value="Reset" /></li>
  										</ul>
  									</form>
  								</section>
  							</div>
  						</div>
  					</footer>
            <div className="modal" onClick={() => this._openModal()}>
              <div className="loader"></div>
              <div className="pic">
                <img src="images/fulls/01.jpg" />
              </div>
              <div className="caption">
                <h2>Magna feugiat lorem</h2>
                <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
              </div>
              <span className="closer"></span>
              <div class="nav-previous"></div>
              <div class="nav-next"></div>
            </div>
  			</div>
    );

  }
}

export default Index;

export const pageQuery = graphql`
  query GalleryImageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            modalImage {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            thumbnailImage {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
