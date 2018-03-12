import React from 'react';
import { Link } from 'react-scroll';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        id="nav"
        className={this.props.isSticky ? 'alt' : 'no'}
      >
        <ul>
          <li>
            <Link activeClass="active" to="intro" spy={true} smooth={true} duration={800}>
              Introduction
            </Link>

            <Link activeClass="active" to="first" spy={true} smooth={true} duration={800}>
              First Section
            </Link>

            <Link activeClass="active" to="second" spy={true} smooth={true} duration={800}>
              Second Section
            </Link>

            <Link activeClass="active" to="cta" spy={true} smooth={true} duration={800}>
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}