import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { Massively } from '../themes/massively/Massively';

export default class Template extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Massively props={this.props}>
        {this.props.children()}
      </Massively>
    );
  }
}
