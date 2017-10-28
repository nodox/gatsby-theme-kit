import React from 'react';
import PropTypes from 'prop-types';

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="intro" className="">
        <div className="img-container">
          <div className="img-size-sm img-intro img-circle"></div>
        </div>
        <h1>Steven Natera</h1>
        <p>{this.props.description}</p>
        <ul className="actions">
          <li>
            <a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a>
          </li>
        </ul>
      </div>
    );
  }
}
