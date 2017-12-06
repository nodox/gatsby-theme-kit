import React from 'react';
import classNames from 'classnames';

export class Header extends React.Component{

  constructor(props) {
    super(props);
  }


  render() {
    var headerClass = classNames({
      'dimensions-hide': !this.props.class,
    });

    var headerId = classNames({
      'header': this.props.class,
    });

    return (
      <header id={headerId} className={headerClass}>
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>Dimension</h1>
            <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
            for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#intro" onClick={() => this.props.transitionHandler('intro')}>Intro</a></li>
            <li><a href="#work" onClick={() => this.props.transitionHandler('work')}>Work</a></li>
            <li><a href="#about" onClick={() => this.props.transitionHandler('about')}>About</a></li>
            <li><a href="#contact" onClick={() => this.props.transitionHandler('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }


}
