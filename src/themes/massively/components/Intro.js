import React from 'react';
import PropTypes from 'prop-types';

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPath } = this.props;
    const { name } = this.props.config;
    const description = this.props.config.introText[currentPath];

    return (
      <div id="intro" className="">
        <div className="img-container">
          <div className="img-size-sm img-intro img-circle"></div>
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a>
          </li>
        </ul>
      </div>
    );
  }
}
